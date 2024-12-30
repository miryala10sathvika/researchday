from fastapi import APIRouter, Request
from fastapi.responses import RedirectResponse, JSONResponse
from cas import CASClient
from jwt import encode, decode, ExpiredSignatureError, DecodeError
from urllib.parse import quote_plus
from os import getenv

# Configuration
CAS_SERVER_URL = getenv("CAS_SERVER_URL", "https://login.iiit.ac.in/cas/")
SERVICE_URL = getenv("SERVICE_URL", "http://localhost/api/login")
REDIRECT_URL = getenv("REDIRECT_URL", "/")
JWT_SECRET = getenv("JWT_SECRET", "jwt-secret-very-very-secret")
service_url_formatted = "%s?next=%s"
DEBUG = getenv("GLOBAL_DEBUG", "False").lower() in ("true", "1", "t")
SECURE_COOKIES = getenv("SECURE_COOKIES", "True").lower() in ("true", "1", "t")

# Instantiate CAS client
cas_client = CASClient(
    version=3,
    service_url=service_url_formatted % (SERVICE_URL, quote_plus(REDIRECT_URL)),
    server_url=CAS_SERVER_URL,
)

auth_router = APIRouter()

@auth_router.get("/login")
async def login(request: Request):
    """CAS login endpoint"""

    # Check if user is already logged in
    if request.cookies.get("Authorization"):
        return RedirectResponse(url=REDIRECT_URL)

    # Get the ticket from the query parameters
    ticket = request.query_params.get("ticket")
    next_url = request.query_params.get("next", REDIRECT_URL)

    if not ticket:
        # Redirect to CAS login if ticket is not present
        cas_login_url = cas_client.get_login_url()
        return RedirectResponse(url=cas_login_url)

    # Verify the ticket from CAS
    user, attributes, _ = cas_client.verify_ticket(ticket)

    if not user:
        return JSONResponse({"message": "Failed to verify ticket"}, status_code=400)

    # Generate JWT token
    payload = {"uid": attributes["uid"], "role": attributes.get("role", "user")}
    token = encode(payload, JWT_SECRET, algorithm="HS256")

    # Set JWT token in cookies
    response = RedirectResponse(url=next_url)
    response.set_cookie(
        "Authorization",
        token,
        httponly=True,
        secure=SECURE_COOKIES,
        max_age=86400,
    )

    return response


@auth_router.get("/logout")
async def logout(request: Request):
    """CAS logout endpoint"""

    # Generate the CAS logout URL (this will log out the session on CAS)
    cas_logout_url = cas_client.get_logout_url(redirect_url=SERVICE_URL)
    response = RedirectResponse(url=cas_logout_url)

    # Delete the JWT cookie before redirecting to CAS logout URL
    response.delete_cookie("Authorization")

    return response

@auth_router.get("/user")
async def profile(request: Request):
    """Get user profile information"""
    # Get the JWT token from the cookies
    token = request.cookies.get("Authorization")

    if not token:
        return JSONResponse({"message": "Unauthorized. No token provided."}, status_code=401)

    try:
        # Decode the token and verify it
        payload = decode(token, JWT_SECRET, algorithms=["HS256"])

        # Return the user profile information
        return JSONResponse({"message": "Profile retrieved", "user": payload}, status_code=200)

    except ExpiredSignatureError:
        return JSONResponse({"message": "Token expired"}, status_code=401)
    except DecodeError:
        return JSONResponse({"message": "Failed to decode token"}, status_code=400)
    except Exception as e:
        return JSONResponse({"message": f"Failed to retrieve profile: {str(e)}"}, status_code=400)
