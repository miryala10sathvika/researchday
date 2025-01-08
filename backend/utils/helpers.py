# # Dependency for User Authentication
# async def get_current_user(access_token_se_p3: str = Cookie(None)):
#     if access_token_se_p3 is None:
#         raise HTTPException(status_code=401, detail="Not Authenticated")
#     try:
#         payload = jwt.decode(access_token_se_p3, SECRET_KEY, algorithms=[ALGORITHM])
#         username = payload.get("sub")
#         if username is None:
#             raise HTTPException(
#                 status_code=401, detail="Invalid authentication credentials"
#             )
#         user = get_user_by_username(username)
#         if user is None:
#             raise HTTPException(
#                 status_code=401, detail="Invalid authentication credentials"
#             )
#         del user.password
#         return user
#     except JWTError:
#         raise HTTPException(
#             status_code=401, detail="Invalid authentication credentials"
#         )

from fastapi import HTTPException, Cookie
from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse, JSONResponse
from cas import CASClient
from jwt import encode, decode, ExpiredSignatureError, DecodeError
from urllib.parse import quote_plus
from os import getenv
from db import db

JWT_SECRET = getenv("JWT_SECRET", "jwt-secret-very-very-secret")


async def get_current_user(access_token: str = Cookie(None)):
    if access_token is None:
        return False
    try:
        payload = decode(access_token, JWT_SECRET, algorithms=["HS256"])
        email = payload.get("email")
        if email is None:
            return False
        return True
    except ExpiredSignatureError:
        return False
    except DecodeError:
        return False


async def check_admin(access_token: str = Cookie(None)):
    if access_token is None:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        payload = decode(access_token, JWT_SECRET, algorithms=["HS256"])
        email = payload.get("email")
        if email is None:
            raise HTTPException(
                status_code=401, detail="Invalid authentication credentials"
            )

        admins = await db.admins.find()

        # return the user if the user is an admin
        for admin in admins:
            if admin["email"] == email:
                return True
        return False
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except DecodeError:
        raise HTTPException(
            status_code=401, detail="Invalid authentication credentials"
        )
