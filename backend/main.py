from fastapi import FastAPI
from routes.auth import auth_router
from routes.submissions import sub_router
from db import setup_db
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
    allow_origins=["*"],  # Your frontend URL
    allow_credentials=True,  # This is required to send cookies
    allow_methods=["*"],
    allow_headers=["*"],
)


# Set up the database on startup
@app.on_event("startup")
async def startup_event():
    await setup_db()


@app.get("/")
def ping():
    return "Backend is running!"


# Include the routes
app.include_router(auth_router)
app.include_router(sub_router)
