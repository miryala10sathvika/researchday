from typing import List, Optional
from uuid import UUID
import uuid
from datetime import datetime
from pytz import timezone
from motor.motor_asyncio import AsyncIOMotorDatabase
from pydantic import BaseModel


def create_ist_time():
    return datetime.now(timezone("Asia/Kolkata"))


# Request and Response Models
class SubmissionCreate(BaseModel):
    track_id: UUID
    title: str
    abstract: str
    authors: str
    lab_name: str
    advisor_name: str
    co_author_names: Optional[str]
    submission_type: str
    forum_name: str
    forum_level: str
    acceptance_date: datetime


class SubmissionUpdateStatus(BaseModel):
    status: str
    review_comments: Optional[str] = None


class SubmissionResponse(BaseModel):
    user_roll_no: str
    submission_id: str
    track_id: str
    title: str
    abstract: str
    authors: str
    lab_name: str
    advisor_name: str
    co_author_names: Optional[str]
    submission_type: str
    forum_name: str
    forum_level: str
    acceptance_date: datetime
    file_url: str
    acceptance_proof: str
    is_poster: bool = False
    status: str
    review_comments: Optional[str]
    submitted_at: datetime
    reviewed_at: Optional[datetime]


class SubmissionLogic:
    @staticmethod
    async def create_submission(
        sub_id: str, db: AsyncIOMotorDatabase, submission: dict
    ) -> SubmissionResponse:
        presenter_registration_deadline = await db.dates.find_one(
            {"presenter_registration_deadline": {"$exists": True}}
        )

        if create_ist_time() > datetime.fromisoformat(
            presenter_registration_deadline["presenter_registration_deadline"]
        ):
            raise ValueError("Presenter registration deadline has passed.")

        new_submission = {
            "user_roll_no": submission["user_roll_no"],
            "submission_id": sub_id,
            "track_id": str(uuid.uuid4()),
            "title": submission["title"],
            "abstract": submission["abstract"],
            "authors": submission["authors"],
            "lab_name": submission["lab_name"],
            "advisor_name": submission["advisor_name"],
            "co_author_names": submission.get("co_author_names"),
            "submission_type": submission["submission_type"],
            "forum_name": submission["forum_name"],
            "forum_level": submission["forum_level"],
            "acceptance_date": submission["acceptance_date"],
            "file_url": submission["file_url"],
            "is_poster": submission["is_poster"],
            "acceptance_proof": submission["acceptance_proof"],
            "status": "Pending",
            "review_comments": None,
            "submitted_at": create_ist_time().replace(microsecond=0).isoformat(),
            "reviewed_at": None,
        }
        await db.submissions.insert_one(new_submission)

        return SubmissionResponse(**new_submission)

    @staticmethod
    async def get_all_submissions(db: AsyncIOMotorDatabase) -> List[SubmissionResponse]:
        submissions_cursor = db.submissions.find()
        submissions = await submissions_cursor.to_list(length=None)
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
                    "reviewed_at": create_ist_time(),
                }
            },
            return_document=True,
        )
        if not result:
            raise ValueError("Submission not found.")
        return SubmissionResponse(**result)

    @staticmethod
    async def get_submission_by_roll_no(
        db: AsyncIOMotorDatabase, roll_no: str, admin: bool
    ) -> SubmissionResponse:
        submission = await db.submissions.find_one({"user_roll_no": roll_no})
        if not submission:
            raise ValueError("Submission not found.")

        return_result = SubmissionResponse(**submission)

        results_day = await db.dates.find_one({"results_day": {"$exists": True}})
        if not admin and create_ist_time() < datetime.fromisoformat(
            results_day["results_day"]
        ):
            # Make status Pending with no review comments
            return_result.status = "Pending"
            return_result.review_comments = None
            return_result.reviewed_at = None

        return return_result

    @staticmethod
    async def get_submission_by_id(
        db: AsyncIOMotorDatabase, submission_id: UUID, admin: bool
    ) -> SubmissionResponse:
        submission = await db.submissions.find_one(
            {"submission_id": str(submission_id)}
        )
        if not submission:
            raise ValueError("Submission not found.")

        return_result = SubmissionResponse(**submission)

        results_day = await db.dates.find_one({"results_day": {"$exists": True}})
        if not admin and create_ist_time() < datetime.fromisoformat(
            results_day["results_day"]
        ):
            # Make status Pending with no review comments
            return_result.status = "Pending"
            return_result.review_comments = None
            return_result.reviewed_at = None

        return return_result
