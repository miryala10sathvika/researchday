from pydantic import BaseModel, EmailStr, HttpUrl
from typing import List, Optional, Literal
from uuid import UUID
from datetime import datetime

# User Schema
class User(BaseModel):
    user_id: UUID
    name: str
    email: EmailStr
    lab: Optional[str]
    roll_number: Optional[str]
    role: Literal['Program Chair', 'Researcher', 'Presenter', 'Attendee']
    registered_at: datetime

# Submission Schema
class Submission(BaseModel):
    submission_id: UUID
    track_id: UUID
    title: str
    abstract: str
    authors: List[UUID]  # Array of user_ids (Presenters)
    lab_name: str
    advisor_name: str
    co_author_names: Optional[str]
    submission_type: str  # Workshop, Short Paper, Full Paper, Journal, etc.
    forum_name: str      # Conference/Journal/Forum Name
    forum_level: str     # A*/A/B/Below B/Workshop/Others
    acceptance_date: datetime
    file_url: str # path of the stored submission file
    acceptance_proof: str # path of the stored acceptance proof
    status: Literal['Pending', 'Accepted', 'Rejected', 'Revision Requested']
    review_comments: Optional[str]
    submitted_at: datetime
    reviewed_at: Optional[datetime]

# Research Track Schema
class ResearchTrack(BaseModel):
    track_id: UUID
    title: str
    description: str
    created_by: UUID  # user_id (Program Chair)
    created_at: datetime

# Announcement Schema
class Announcement(BaseModel):
    announcement_id: UUID
    track_id: Optional[UUID]
    title: str
    content: str
    created_by: UUID  # user_id (Program Chair)
    created_at: datetime

# Schedule Schema
class Schedule(BaseModel):
    schedule_id: UUID
    track_id: UUID
    session_title: str
    session_description: str
    start_time: datetime
    end_time: datetime
    presenters: List[UUID]  # Array of submission_ids
    location: str
    created_at: datetime

# Registration Schema
class Registration(BaseModel):
    registration_id: UUID
    user_id: UUID
    track_id: UUID
    registered_at: datetime