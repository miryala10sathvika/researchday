"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { getDatetimeformat } from "utils/dateTime";

export default function SubmissionDetails({ submission }) {
  const [status, setStatus] = useState(submission.status);
  const [reviewComments, setReviewComments] = useState(submission.review_comments || "");
  const [presentationType, setPresentationType] = useState(submission.is_poster ? "Poster" : "Paper");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/submissions/${
          submission?.submission_id
        }`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
            review_comments: reviewComments,
            is_poster: presentationType === "Poster",
          }),
          credentials: "include",
        }
      );

      const result = await response.json();

      if (response.ok) {
        setIsSuccessModalOpen(true);
        router.refresh();
      } else {
        alert(`Failed to save changes: ${result.detail}`);
      }
    } catch (error) {
      console.error("Error updating submission:", error);
      alert("Failed to save changes.");
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false); // Close modal
  };


  return (
    <Box sx={{ p: 4, ml: 4, mt: 4 }}>
      {/* Input Section */}
      <Card sx={{ mb: 4, p: 3, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Update Submission Details
        </Typography>
        <Grid container spacing={3}>
          {/* Update Status */}
        <Grid item  xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }} >
          <Grid>
            <FormControl fullWidth>
              <InputLabel id="status-label">Update Status</InputLabel>
              <Select
                labelId="status-label"
                label="Update Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Accepted">Approve</MenuItem>
                <MenuItem value="Revision Requested">Send for Revision</MenuItem>
                <MenuItem value="Rejected">Reject</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          {/* Presentation Type */}
          <Grid>
            <FormControl fullWidth>
              <InputLabel id="presentation-type-label">Type of Presentation</InputLabel>
              <Select
                labelId="presentation-type-label"
                value={presentationType}
                label="Type of Presentation"
                onChange={(e) => setPresentationType(e.target.value)}
                >
                <MenuItem value="Poster">Poster</MenuItem>
                <MenuItem value="Paper">Paper</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          </Grid>
          {/* Review Comments */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Review Comments"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={reviewComments}
              onChange={(e) => setReviewComments(e.target.value)}
              />
          </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2, width: "100%" }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Grid>
      </Card>

      {/* Display Remaining Details */}
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Submission Details
        </Typography>
        <Grid container spacing={2}>
          {[
              { label: "Student Roll No", value: submission.user_roll_no },
              { label: "Email", value: submission.email },
              { label: "Title", value: submission.title },
              { label: "Submission Type", value: submission.submission_type },
              { label: "Author", value: submission?.author },
              { label: "Co-Authors", value: submission.co_author_names },
              { label: "Lab", value: submission.lab_name },
              { label: "Advisor", value: submission.advisor_name },
              { label: "Forum", value: submission.forum_name },
              { label: "Forum Level", value: submission.forum_level },
              {
                label: "Acceptance Date",
                value: getDatetimeformat(submission.acceptance_date).dateString,
              },
              { label: "Submitted On", value: getDatetimeformat(submission.submitted_at).dateString },
            ].map((detail, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {detail?.label?.toUpperCase()}:
              </Typography>
              <Typography variant="body1">
                {detail.value}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Abstract
            </Typography>
            <Typography variant="body1" sx={{ wordBreak: "break-all" }} dangerouslySetInnerHTML={{ __html: submission?.abstract?.replace('\n', '<br />') }} />
          </Grid>
          <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  UPLOADED PAPER
                </Typography>
                {submission.file_url && (
                  <Button
                    variant="outlined"
                    href={`/api/get-pdf/paper/${submission?.user_roll_no}_paper`}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    View Paper
                  </Button>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Proof of Acceptance
                </Typography>
                {submission.acceptance_proof && (
                  <Button
                    variant="outlined"
                    href={`/api/get-pdf/proof/${submission?.user_roll_no}_proof`}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    View Proof
                  </Button>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Status
                </Typography>
                <Typography variant="body1">{submission.status}</Typography>
              </Grid>
              {submission?.status !== "Pending" && (
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Review Comments
                  </Typography>
                  <Typography variant="body1">{submission.review_comments}</Typography>
                </Grid>
              )}
              {submission?.status === "Accepted" && (
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Type of Presentation
                  </Typography>
                  <Typography variant="body1">{submission.is_poster ? "Poster" : "Paper"}</Typography>
                </Grid>
              )}
                {submission?.status !== "Pending" && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Reviewed date
                    </Typography>
                    <Typography variant="body1">
                      {getDatetimeformat(submission?.reviewed_at).dateString}
                      </Typography>
                  </Grid>
                )}
        </Grid>
      </Card>
      <Dialog
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
      >
        <DialogTitle id="success-dialog-title">Success</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            Changes have been saved successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
