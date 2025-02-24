from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends
from typing import List, Optional
from uuid import UUID, uuid4
from manager.submissions import (
    SubmissionLogic,
    SubmissionUpdateStatus,
    SubmissionResponse,
    DeleteSubmissionRequest,
)
import os
from db import db
from fastapi.responses import FileResponse
from datetime import datetime
from pytz import timezone
from utils.helpers import get_current_user, check_admin
from datetime import datetime

sub_router = APIRouter()


def create_ist_time():
    return datetime.now(timezone("Asia/Kolkata"))


@sub_router.post("/submissions", response_model=SubmissionResponse)
async def create_submission(
    user_roll_no: str = Form(...),
    title: str = Form(...),
    abstract: str = Form(...),
    lab_name: str = Form(...),
    advisor_name: str = Form(...),
    author: str = Form(...),
    email: str = Form(...),
    co_author_names: Optional[str] = Form(None),
    submission_type: str = Form(...),
    forum_name: str = Form(...),
    forum_level: str = Form(...),
    acceptance_date: str = Form(...),  # Will be converted to datetime
    file_url: UploadFile = File(...),
    acceptance_proof: UploadFile = File(...),
    # is_poster: bool = Form(...),
    user: dict = Depends(get_current_user),
):
    if not user or user_roll_no != user["roll_no"]:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        existing_submission = await SubmissionLogic.get_submission_by_roll_no(
            db=db, roll_no=user_roll_no, admin=False
        )
    except ValueError as e:
        existing_submission = None
    if existing_submission:
        raise HTTPException(
            status_code=400,
            detail=f"A submission already exists for user roll number: {user_roll_no}",
        )

    try:
        sub_id = str(uuid4())

        file_url_path = f"uploads/paper/{user_roll_no}_paper.pdf"
        acceptance_proof_path = f"uploads/proof/{user_roll_no}_proof.pdf"
        os.makedirs(os.path.dirname(file_url_path), exist_ok=True)
        os.makedirs(os.path.dirname(acceptance_proof_path), exist_ok=True)

        with open(file_url_path, "wb+") as f:
            f.write(await file_url.read())
        with open(acceptance_proof_path, "wb+") as f:
            f.write(await acceptance_proof.read())

        # Prepare submission data
        submission_data = {
            "user_roll_no": user_roll_no,
            "title": title,
            "abstract": abstract,
            "lab_name": lab_name,
            "advisor_name": advisor_name,
            "author": author,
            "email": email,
            "co_author_names": co_author_names,
            "submission_type": submission_type,
            "forum_name": forum_name,
            "forum_level": forum_level,
            "acceptance_date": datetime.fromisoformat(acceptance_date),
            "file_url": file_url_path,
            "acceptance_proof": acceptance_proof_path,
        }

        # Create the submission in the database
        return await SubmissionLogic.create_submission(sub_id, db, submission_data)
    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error in your backend logs
        raise HTTPException(status_code=400, detail=f"Error: {str(e)}")


@sub_router.put("/submissions", response_model=SubmissionResponse)
async def update_submission(
    user_roll_no: str = Form(...),
    title: str = Form(...),
    abstract: str = Form(...),
    lab_name: str = Form(...),
    advisor_name: str = Form(...),
    author: str = Form(...),
    email: str = Form(...),
    co_author_names: Optional[str] = Form(None),
    submission_type: str = Form(...),
    forum_name: str = Form(...),
    forum_level: str = Form(...),
    acceptance_date: str = Form(...),
    file_url: UploadFile = File(None),
    acceptance_proof: UploadFile = File(None),
    user: dict = Depends(get_current_user),
):
    if not user or user_roll_no != user["roll_no"]:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        if file_url:
            file_url_path = f"uploads/paper/{user_roll_no}_paper.pdf"
            os.makedirs(os.path.dirname(file_url_path), exist_ok=True)
            with open(file_url_path, "wb+") as f:
                f.write(await file_url.read())
        if acceptance_proof:
            acceptance_proof_path = f"uploads/proof/{user_roll_no}_proof.pdf"
            os.makedirs(os.path.dirname(acceptance_proof_path), exist_ok=True)
            with open(acceptance_proof_path, "wb+") as f:
                f.write(await acceptance_proof.read())

        submission_data = {
            "title": title,
            "abstract": abstract,
            "lab_name": lab_name,
            "advisor_name": advisor_name,
            "author": author,
            "email": email,
            "co_author_names": co_author_names,
            "submission_type": submission_type,
            "forum_name": forum_name,
            "forum_level": forum_level,
            "acceptance_date": datetime.fromisoformat(acceptance_date),
            "is_poster": False,
            "status": "Pending",
            "review_comments": None,
            "submitted_at": create_ist_time().replace(microsecond=0).isoformat(),
            "reviewed_at": None,
        }

        return await SubmissionLogic.update_submission(
            db, user_roll_no, submission_data
        )

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.delete("/submissions")
async def delete_submission(
    request: DeleteSubmissionRequest,  # Parse body as a Pydantic model
    user: dict = Depends(get_current_user),
) -> SubmissionResponse:
    user_roll_no = request.user_roll_no
    if not user or user_roll_no != user["roll_no"]:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        deleted_submission = await SubmissionLogic.delete_submission(db, user_roll_no)
        os.remove(deleted_submission.file_url)
        os.remove(deleted_submission.acceptance_proof)
        return deleted_submission
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.get("/submissions", response_model=List[SubmissionResponse])
async def get_all_submissions(
    admin: bool = Depends(check_admin),
):
    if not admin:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        return await SubmissionLogic.get_all_submissions(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"{str(e)}")


@sub_router.get("/submissions/{roll_no}", response_model=SubmissionResponse)
async def get_submission(roll_no: str, admin: bool = Depends(check_admin)):
    try:
        return await SubmissionLogic.get_submission_by_roll_no(db, roll_no, admin)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"-{str(e)}")


#  get submission by submission id
@sub_router.get("/submission/{submission_id}", response_model=SubmissionResponse)
async def get_submission_by_id(
    submission_id: UUID,
    admin: bool = Depends(check_admin),
):
    try:
        return await SubmissionLogic.get_submission_by_id(db, submission_id, admin)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.patch("/submissions/{submission_id}", response_model=SubmissionResponse)
async def update_submission_status(
    submission_id: UUID,
    update: SubmissionUpdateStatus,
    admin: bool = Depends(check_admin),
):
    if not admin:
        raise HTTPException(status_code=401, detail="Not Authenticated")

    try:
        return await SubmissionLogic.update_submission_status(db, submission_id, update)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.get("/get-pdf/{folder_name}/{uuid}")
async def get_pdf(
    folder_name: str,
    uuid: str,
    admin: bool = Depends(check_admin),
):
    if folder_name not in ["paper", "proof"]:
        raise HTTPException(status_code=400, detail="Invalid folder name")

    public_view = False
    roll_no = uuid.split("_")[0]
    submission = await SubmissionLogic.get_submission_by_roll_no(db, roll_no, admin)
    if submission.status == "Accepted" and folder_name == "paper":
        public_view = True

    if not (admin or public_view):
        raise HTTPException(status_code=401, detail="Not Authenticated")

    try:
        return FileResponse(f"uploads/{folder_name}/{uuid}.pdf")
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.get("/important-dates")
async def get_important_dates():
    dates = db.dates.find({})
    dates = await dates.to_list(length=None)

    return_dates = {}
    for date in dates:
        for key in date:
            if key != "_id":
                return_dates[key] = date[key]

    return return_dates


@sub_router.get("/announcements")
async def get_announcements():
    announcements = db.announcements.find({})
    announcements = await announcements.to_list(length=None)

    return_announcements = []
    for announcement in announcements:
        return_announcements.append(
            {"content": announcement["content"], "date": announcement["date"]}
        )

    return return_announcements


@sub_router.post("/add-announcement")
async def add_announcement(
    content: str,
    date: str,
    admin: bool = Depends(check_admin),
):
    if not admin:
        raise HTTPException(status_code=401, detail="Not Authenticated")

    announcement = {"content": content, "date": date}

    db.announcements.insert_one(announcement)

    return {"message": "Announcement added successfully"}
