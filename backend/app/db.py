from pymongo import MongoClient
import os

# Retrieve the MongoDB URI from environment variables or use a default value
MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongo:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "conference")


def get_db():
    """
    Function to get the database connection.
    Returns:
        db: The MongoDB database object.
    """
    client = MongoClient(MONGO_URI)
    return client[DATABASE_NAME]

def setup_db():
    """
    Function to setup the database.
    """
    db = get_db()
    collections = ["users", "submissions", "research_tracks", "announcements", "schedule", "registrations"]
    for collection in collections:
        if collection not in db.list_collection_names():
            db.create_collection(collection)
