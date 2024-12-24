from fastapi import APIRouter, Depends
from app.services.auth import verify_cas

router = APIRouter()

@router.get("/login")
def cas_login(ticket: str):
    user_data = verify_cas(ticket)
    if user_data:
        return {"status": "success", "user": user_data}
    return {"status": "failure", "message": "Authentication failed"}
