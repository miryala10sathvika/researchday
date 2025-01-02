from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse, JSONResponse
from cas import CASClient
from jwt import encode, decode, ExpiredSignatureError, DecodeError
from urllib.parse import quote_plus
from os import getenv
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG if getenv("GLOBAL_DEBUG", "False").lower() in ("true", "1", "t") else logging.INFO)
logger = logging.getLogger("auth_router")

# Configuration
CAS_SERVER_URL = getenv("CAS_SERVER_URL", "https://login.iiit.ac.in/cas/")
SERVICE_URL = getenv("SERVICE_URL", "http://localhost/api/login")
REDIRECT_URL = getenv("REDIRECT_URL", "/")
JWT_SECRET = getenv("JWT_SECRET", "jwt-secret-very-very-secret")
DEBUG = getenv("GLOBAL_DEBUG", "False").lower() in ("true", "1", "t")
SECURE_COOKIES = getenv("SECURE_COOKIES", "True").lower() in ("true", "1", "t")
COOKIE_MAX_AGE = int(getenv("COOKIE_MAX_AGE", "86400"))

# Instantiate CAS client
cas_client = CASClient(
    version=3,
    service_url=f"{SERVICE_URL}?next={quote_plus(REDIRECT_URL)}",
    server_url=CAS_SERVER_URL,
)

# Initialize the router
auth_router = APIRouter()

@auth_router.get("/login")
async def login(request: Request):
    """
    CAS login endpoint. Handles user authentication and sets a JWT token in cookies.
    """
    try:
        # Check if the user is already logged in
        if "Authorization" in request.cookies:
            logger.info("User is already logged in. Redirecting to home.")
            return RedirectResponse(url=REDIRECT_URL)

        ticket = request.query_params.get("ticket")
        next_url = request.query_params.get("next", REDIRECT_URL)

        if not ticket:
            # Redirect to CAS login if no ticket is provided
            logger.info("No ticket found. Redirecting to CAS login.")
            cas_login_url = cas_client.get_login_url()
            return RedirectResponse(url=cas_login_url)

        # Verify the ticket with CAS
        user, attributes, _ = cas_client.verify_ticket(ticket)
        if not user:
            logger.error("Failed to verify CAS ticket.")
            raise HTTPException(status_code=400, detail="Failed to verify ticket with CAS")

        # Generate JWT token
        payload = {"uid": attributes["uid"], "role": attributes.get("role", "user")}
        token = encode(payload, JWT_SECRET, algorithm="HS256")

        # Set JWT token in cookies
        response = RedirectResponse(url=next_url)
        response.set_cookie(
            key="Authorization",
            value=token,
            httponly=True,
            secure=SECURE_COOKIES,
            max_age=COOKIE_MAX_AGE,
        )
        logger.info("User successfully authenticated and JWT token set.")
        return response

    except Exception as e:
        logger.exception("An error occurred during login.")
        return JSONResponse({"message": f"Login failed: {str(e)}"}, status_code=500)

@auth_router.get("/logout")
async def logout(request: Request):
    """
    CAS logout endpoint. Logs out the user and clears the JWT token.
    """
    try:
        cas_logout_url = cas_client.get_logout_url(redirect_url=SERVICE_URL)
        response = RedirectResponse(url=cas_logout_url)
        response.delete_cookie("Authorization")
        logger.info("User logged out successfully.")
        return response
    except Exception as e:
        logger.exception("An error occurred during logout.")
        return JSONResponse({"message": f"Logout failed: {str(e)}"}, status_code=500)

@auth_router.get("/user")
async def profile(request: Request):
    """
    Retrieve user profile information using the JWT token.
    """
    try:
        token = request.cookies.get("Authorization")
        if not token:
            logger.warning("Unauthorized access attempt. No token provided.")
            raise HTTPException(status_code=401, detail="Unauthorized. No token provided.")

        # Decode and verify the JWT token
        payload = decode(token, JWT_SECRET, algorithms=["HS256"])
        logger.info("User profile retrieved successfully.")
        return JSONResponse({"message": "Profile retrieved", "user": payload}, status_code=200)

    except ExpiredSignatureError:
        logger.warning("Token expired during profile retrieval.")
        return JSONResponse({"message": "Token expired"}, status_code=401)
    except DecodeError:
        logger.warning("Failed to decode JWT token.")
        return JSONResponse({"message": "Failed to decode token"}, status_code=400)
    except Exception as e:
        logger.exception("An error occurred while retrieving profile information.")
        return JSONResponse({"message": f"Failed to retrieve profile: {str(e)}"}, status_code=500)
