from fastapi import FastAPI
#from app.routes import auth
from db import get_db

app = FastAPI(root_path="/api")

#app.include_router(auth.router, prefix="/auth")

@app.get("/")
def read_root():
    db=get_db()
    #return {"message": "Welcome to IIITH Conference API"}
    return str(db.client)
