from motor.motor_asyncio import AsyncIOMotorClient
from os import getenv

MONGO_URI = "mongodb://{}:{}@mongo:{}/".format(
    getenv("MONGO_USERNAME", default="username"),
    getenv("MONGO_PASSWORD", default="password"),
    getenv("MONGO_PORT", default="27017"),
)
DATABASE_NAME = getenv("MONGO_DATABASE", default="default")

client = AsyncIOMotorClient(MONGO_URI)
db = client[DATABASE_NAME]


async def setup_db():
    """
    Function to set up the database asynchronously.
    Creates collections if they don't exist.
    """
    collections = [
        "admins",
        "submissions",
        "research_tracks",
        "announcements",
        "schedule",
        "registrations",
        "dates",
    ]
    existing_collections = await db.list_collection_names()
    for collection in collections:
        if collection not in existing_collections:
            print(f"Creating collection: {collection}")
            await db.create_collection(collection)

    # Check if dates collection is empty
    if await db.dates.count_documents({}) == 0:
        print("Inserting default dates.")
        schedule = {
            "presenter_registration_deadline": "2025-01-20T23:59:59",
            "attendee_registration_start": "2025-01-18T23:59:59",
            "attendee_registration_end": "2025-01-25T23:59:59",
            "results_day": "2025-01-27T00:00:00",
        }
        for key, value in schedule.items():
            await db.dates.insert_one({key: value})

    # Check if admins is empty
    if await db.admins.count_documents({}) == 0:
        admins = [
            "aparajitha.allamraju@research.iiit.ac.in",
            "shodasakshari.vidya@research.iiit.ac.in",
            "furqan.shaik@research.iiit.ac.in",
            "sudarshan.srinivasan@research.iiit.ac.in",
            "bhav.beri@research.iiit.ac.in"
        ]
        print("Inserting default admins.")
        for admin in admins:
            await db.admins.insert_one({"username": admin})

    print("Database setup complete.")
