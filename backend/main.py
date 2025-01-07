from fastapi import FastAPI
from routes.auth import auth_router
from routes.submissions import sub_router
from db import get_db
from fastapi.middleware.cors import CORSMiddleware
from os import getenv

DEBUG = getenv("GLOBAL_DEBUG", "False").lower() in ("true", "1", "t")
if DEBUG:
    app = FastAPI(
        debug=DEBUG,
        title="ResearchFest",
        description="ResearchFest API",
        root_path="/api",
    )
else:
    app = FastAPI(
        debug=DEBUG,
        title="ResearchFest",
        docs_url=None,
        redoc_url=None,
        root_path="/api",
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost"],  # Your frontend URL
    allow_credentials=True,  # This is required to send cookies
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    db = get_db()  # Get the database connection
    return "Hello World!"
    # return {"client_info": str(db.client)}  # Return the MongoDB client information as a response


# Include the routes
app.include_router(auth_router)
app.include_router(sub_router)
