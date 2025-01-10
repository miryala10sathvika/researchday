# # Dependency for User Authentication
# async def get_current_user(Authorization_se_p3: str = Cookie(None)):
#     if Authorization_se_p3 is None:
#         raise HTTPException(status_code=401, detail="Not Authenticated")
#     try:
#         payload = jwt.decode(Authorization_se_p3, SECRET_KEY, algorithms=[ALGORITHM])
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


async def get_current_user(Authorization: str = Cookie(None)):
    if Authorization is None:
        return False
    try:
        payload = decode(Authorization, JWT_SECRET, algorithms=["HS256"])
        email = payload.get("email")
        roll_no = payload.get("roll")
        if email is None:
            return False
        return {"email": email, "roll_no": roll_no}
    except ExpiredSignatureError:
        return False
    except DecodeError:
        return False


async def check_admin(Authorization: str = Cookie(None)):
    if Authorization is None:
        return False
    try:
        payload = decode(Authorization, JWT_SECRET, algorithms=["HS256"])
        email = payload.get("email")
        if email is None:
            return False
        admins = db.admins.find()
        admins_list = await admins.to_list(length=None)

        # return the user if the user is an admin
        for admin in admins_list:
            if admin["username"] == email:
                return True
        return False
    except ExpiredSignatureError:
        return False
    except DecodeError:
        return False
