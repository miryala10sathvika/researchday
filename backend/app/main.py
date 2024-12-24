from fastapi import FastAPI
from app.routes import auth

app = FastAPI(root_path="/api")

app.include_router(auth.router, prefix="/auth")

@app.get("/")
def read_root():
    return {"message": "Welcome to IIITH Conference API"}
