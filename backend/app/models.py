from pydantic import BaseModel

class User(BaseModel):
    name: str
    student_id: str
    year: str
    role: str  # e.g., "presenter", "attendee", "admin"

