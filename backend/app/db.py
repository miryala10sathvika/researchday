from motor.motor_asyncio import AsyncIOMotorClient
import os

# Retrieve the MongoDB URI from environment variables or use a default value
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "conference")


async def get_db():
    """
    Function to get the database connection asynchronously.
    Returns:
        db: The MongoDB database object.
    """
    client = AsyncIOMotorClient(MONGO_URI)
    return client[DATABASE_NAME]

async def setup_db():
    """
    Function to set up the database asynchronously.
    Creates collections if they don't exist.
    """
    db = await get_db()  # Use `await` since `get_db()` is asynchronous
    collections = ["users", "submissions", "research_tracks", "announcements", "schedule", "registrations"]
    for collection in collections:
        if collection not in await db.list_collection_names():  # Use await here too
            await db.create_collection(collection)
