from typing import List, Optional
from pydantic import BaseModel, Field
from uuid import UUID
import uuid
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorDatabase


# Request and Response Models
class SubmissionCreate(BaseModel):
    track_id: UUID
    title: str
    abstract: str
    authors: List[UUID]


class SubmissionUpdateStatus(BaseModel):
    status: str 
    review_comments: Optional[str] = None


class SubmissionResponse(BaseModel):
    user_roll_no: str
    submission_id: str
    track_id: str
    title: str
    abstract: str
    authors: List[str]
    file_url: str
    acceptance_proof: str
    status: str
    review_comments: Optional[str]
    submitted_at: datetime
    reviewed_at: Optional[datetime]


class SubmissionLogic:
    @staticmethod
    async def create_submission(sub_id:str,db: AsyncIOMotorDatabase, submission: dict) -> SubmissionResponse:
        new_submission = {
            "user_roll_no": submission["user_roll_no"],
            "submission_id": sub_id,  # Auto-generate submission_id
            "track_id": str(uuid.uuid4()),  # Auto-generate track_id
            "title": submission["title"],
            "abstract": submission["abstract"],
            "authors": submission["authors"],
            "file_url": submission["file_url"],
            "acceptance_proof": submission["acceptance_proof"],
            "status": "Pending",
            "review_comments": None,
            "submitted_at": datetime.utcnow(),
            "reviewed_at": None,
        }
        db.submissions.insert_one(new_submission)
        return SubmissionResponse(**new_submission)

    @staticmethod
    async def get_all_submissions(db: AsyncIOMotorDatabase) -> List[SubmissionResponse]:
        submissions_cursor =db.submissions.find()
        submissions= await submissions_cursor.to_list(length=None)
        return [SubmissionResponse(**submission) for submission in submissions]

    @staticmethod
    async def update_submission_status(
        db: AsyncIOMotorDatabase, submission_id: UUID, update: SubmissionUpdateStatus
    ) -> SubmissionResponse:
        result = await db.submissions.find_one_and_update(
            {"submission_id": str(submission_id)},
            {
                "$set": {
                    "status": update.status,
                    "review_comments": update.review_comments,
                    "reviewed_at": datetime.utcnow(),
                }
            },
            return_document=True,
        )
        if not result:
            raise ValueError("Submission not found.")
        return SubmissionResponse(**result)
