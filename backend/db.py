from motor.motor_asyncio import AsyncIOMotorClient
from os import getenv

MONGO_URI = "mongodb://{}:{}@mongo:{}/".format(
    getenv("MONGO_USERNAME", default="username"),
    getenv("MONGO_PASSWORD", default="password"),
    getenv("MONGO_PORT", default="27017"),
)
DATABASE_NAME = getenv("MONGO_DATABASE", default="default")


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
