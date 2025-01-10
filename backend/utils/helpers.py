from fastapi import Cookie
from jwt import encode, decode, ExpiredSignatureError, DecodeError
from os import getenv
from db import db

JWT_SECRET = getenv("JWT_SECRET", "jwt-secret-very-very-secret")


async def get_current_user(RF_Auth: str = Cookie(None)):
    if RF_Auth is None:
        return False
    try:
        payload = decode(RF_Auth, JWT_SECRET, algorithms=["HS256"])
        email = payload.get("email")
        if email is None:
            return False
        return True
    except ExpiredSignatureError:
        return False
    except DecodeError:
        return False


async def check_admin(RF_Auth: str = Cookie(None)):
    if RF_Auth is None:
        return False
    try:
        payload = decode(RF_Auth, JWT_SECRET, algorithms=["HS256"])
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
