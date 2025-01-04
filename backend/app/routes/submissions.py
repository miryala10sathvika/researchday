from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from typing import List
from uuid import UUID, uuid4
from app.manager.submissions import SubmissionLogic, SubmissionCreate, SubmissionUpdateStatus, SubmissionResponse
from app.db import get_db
import uuid
from fastapi.responses import FileResponse
import os

sub_router = APIRouter()


@sub_router.post("/submissions", response_model=SubmissionResponse)
async def create_submission(
    user_roll_no: str = Form(...),
    title: str = Form(...),
    abstract: str = Form(...),
    authors: str = Form(...),  # Comma-separated authors
    file_url: UploadFile = File(...),
    acceptance_proof: UploadFile = File(...),
    db=Depends(get_db),
):
    try:
        sub_id = str(uuid4())


        file_url_path = f"uploads/paper/{sub_id}.pdf"
        acceptance_proof_path = f"uploads/proof/{sub_id}.pdf"
        
        # with open(file_url_path, "wb+") as f:
        #     f.write(await file_url.read())
        # with open(acceptance_proof_path, "wb+") as f:
        #     f.write(await acceptance_proof.read())

        # Prepare submission data
        submission_data = {
            "user_roll_no":user_roll_no,
            "title": title,
            "abstract": abstract,
            "authors": authors,
            "file_url": file_url_path,
            "acceptance_proof": acceptance_proof_path,
        }

        # Create the submission in the database
        return await SubmissionLogic.create_submission(str(sub_id), db, submission_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")


@sub_router.get("/submissions", response_model=List[SubmissionResponse])
async def get_all_submissions(db=Depends(get_db)):
    try:
        return await SubmissionLogic.get_all_submissions(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"{str(e)}")

@sub_router.get("/submissions/{roll_no}", response_model=SubmissionResponse)
async def get_submission(roll_no: str, db=Depends(get_db)):
    try:
        return await SubmissionLogic.get_submission_by_roll_no(db, roll_no)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"-{str(e)}")


@sub_router.patch("/submissions/{submission_id}", response_model=SubmissionResponse)
async def update_submission_status(submission_id: UUID, update: SubmissionUpdateStatus, db=Depends(get_db)):
    try:
        return await SubmissionLogic.update_submission_status(db, submission_id, update)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=f"{str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{str(e)}")
    
@sub_router.get("/get-pdf/{folder_name}/{uuid}")
async def get_pdf(folder_name: str, uuid: str):
    # Construct the file paths
    file_path = os.path.join("uploads", folder_name, f"{uuid}.pdf")
    
    # Check if the file exists
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    # Return the file as a response
    return FileResponse(file_path, media_type="application/pdf")