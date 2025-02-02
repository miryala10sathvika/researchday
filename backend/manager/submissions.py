from typing import List, Optional, Literal
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
    lab_name: str
    advisor_name: str
    author: str
    email: str
    co_author_names: Optional[str]
    submission_type: str
    forum_name: str
    forum_level: str
    acceptance_date: datetime


class SubmissionUpdateStatus(BaseModel):
    status: Literal["Pending", "Accepted", "Rejected", "Revision Requested"]
    review_comments: Optional[str] = None
    is_poster: bool = False


class SubmissionResponse(BaseModel):
    user_roll_no: str
    submission_id: str
    track_id: str
    title: str
    abstract: str
    lab_name: str
    advisor_name: str
    author: str
    email: str
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

class DeleteSubmissionRequest(BaseModel):
    user_roll_no: str


class SubmissionLogic:
    @staticmethod
    async def create_submission(
        sub_id: str, db: AsyncIOMotorDatabase, submission: dict
    ) -> SubmissionResponse:
        presenter_registration_deadline = await db.dates.find_one(
            {"presenter_registration_deadline": {"$exists": True}}
        )

        deadline = datetime.fromisoformat(
            presenter_registration_deadline["presenter_registration_deadline"]
        )
        if create_ist_time() > timezone("Asia/Kolkata").localize(deadline):
            raise ValueError("Presenter registration deadline has passed.")

        new_submission = {
            "user_roll_no": submission["user_roll_no"],
            "submission_id": sub_id,
            "track_id": str(uuid.uuid4()),
            "title": submission["title"],
            "abstract": submission["abstract"],
            "lab_name": submission["lab_name"],
            "advisor_name": submission["advisor_name"],
            "author": submission["author"],
            "email": submission["email"],
            "co_author_names": submission.get("co_author_names"),
            "submission_type": submission["submission_type"],
            "forum_name": submission["forum_name"],
            "forum_level": submission["forum_level"],
            "acceptance_date": submission["acceptance_date"],
            "file_url": submission["file_url"],
            "acceptance_proof": submission["acceptance_proof"],
            "status": "Pending",
            "review_comments": None,
            "submitted_at": create_ist_time().replace(microsecond=0).isoformat(),
            "reviewed_at": None,
        }
        await db.submissions.insert_one(new_submission)

        return SubmissionResponse(**new_submission)

    @staticmethod
    async def update_submission(
        db: AsyncIOMotorDatabase, user_roll_no: UUID, submission: dict
    ) -> SubmissionResponse:
        result = await db.submissions.find_one_and_update(
            {"user_roll_no": user_roll_no},
            {"$set": submission},
            return_document=True,
        )

        if not result:
            raise ValueError("Submission not found.")
        return SubmissionResponse(**result)

    @staticmethod
    async def delete_submission(
        db: AsyncIOMotorDatabase, user_roll_no: str
    ) -> SubmissionResponse:
        result = await db.submissions.find_one_and_delete(
            {"user_roll_no": user_roll_no}
        )
        if not result:
            raise ValueError("Submission not found.")

        return SubmissionResponse(**result)

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
                    "is_poster": update.is_poster,
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
        if not admin:
            results_day_dt = timezone("Asia/Kolkata").localize(
                datetime.fromisoformat(results_day["results_day"])
            )
            if create_ist_time() < results_day_dt:
                # Make status Pending with no review comments
                if not return_result.status == "Revision Requested":
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
        if not admin and create_ist_time() < timezone("Asia/Kolkata").localize(
            datetime.fromisoformat(results_day["results_day"])
        ):
            if not return_result.status == "Revision Requested":
                # Make status Pending with no review comments
                return_result.status = "Pending"
                return_result.review_comments = None
                return_result.reviewed_at = None

        return return_result
