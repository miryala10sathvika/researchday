from fastapi import FastAPI
from app.routes.auth import auth_router
from app.routes.submissions import sub_router
from app.db import get_db

app = FastAPI(root_path="/api")

@app.get("/")
def read_root():
    db = get_db()  # Get the database connection
    return "Hello World!"
    # return {"client_info": str(db.client)}  # Return the MongoDB client information as a response

# Include the routes
app.include_router(auth_router)
app.include_router(sub_router)
