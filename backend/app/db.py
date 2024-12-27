from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017"
DATABASE_NAME = "conference"

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]  

collections = ["users", "submissions", "research_tracks", "announcements", "schedule", "registrations"]
for collection in collections:
    if collection not in db.list_collection_names():
        db.create_collection(collection)

    
def get_db():
    return db