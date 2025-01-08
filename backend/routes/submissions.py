from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends
from typing import List, Optional
from uuid import UUID, uuid4
from manager.submissions import (
    SubmissionLogic,
    SubmissionCreate,
    SubmissionUpdateStatus,
    SubmissionResponse,
)
from db import db
from fastapi.responses import FileResponse
import os
from utils.helpers import get_current_user, check_admin
from datetime import datetime

sub_router = APIRouter()


@sub_router.post("/submissions", response_model=SubmissionResponse)
async def create_submission(
    user_roll_no: str = Form(...),
    title: str = Form(...),
    abstract: str = Form(...),
    authors: str = Form(...),  # Comma-separated authors
    lab_name: str = Form(...),
    advisor_name: str = Form(...),
    co_author_names: Optional[str] = Form(None),
    submission_type: str = Form(...),
    forum_name: str = Form(...),
    forum_level: str = Form(...),
    acceptance_date: str = Form(...),  # Will be converted to datetime
    file_url: UploadFile = File(...),
    acceptance_proof: UploadFile = File(...),
    is_poster: bool = Form(...),
    user: bool = Depends(get_current_user),
):
    if user:
        raise HTTPException(status_code=401, detail="Already Logged In")

    try:
        sub_id = str(uuid4())

        file_url_path = f"uploads/paper/{sub_id}.pdf"
        acceptance_proof_path = f"uploads/proof/{sub_id}.pdf"
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
            "authors": authors,
            "lab_name": lab_name,
            "advisor_name": advisor_name,
            "co_author_names": co_author_names,
            "submission_type": submission_type,
            "forum_name": forum_name,
            "forum_level": forum_level,
            "acceptance_date": datetime.fromisoformat(acceptance_date),
            "file_url": file_url_path,
            "acceptance_proof": acceptance_proof_path,
            "is_poster": is_poster,
        }

        # Create the submission in the database
        return await SubmissionLogic.create_submission(str(sub_id), db, submission_data)
    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error in your backend logs
        raise HTTPException(status_code=400, detail=f"Error: {str(e)}")


@sub_router.get("/submissions", response_model=List[SubmissionResponse])
async def get_all_submissions(
    admin: bool = Depends(get_current_user),
):
    if not admin:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    try:
        return await SubmissionLogic.get_all_submissions(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"{str(e)}")


@sub_router.get("/submissions/{roll_no}", response_model=SubmissionResponse)
async def get_submission(roll_no: str, admin: bool = Depends(get_current_user)):
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
    admin: bool = Depends(get_current_user),
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
    admin: bool = Depends(get_current_user),
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
    admin: bool = Depends(get_current_user),
):
    try:
        return FileResponse(f"uploads/{folder_name}/{uuid}.pdf")
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")
