"use client";

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Icon from "components/Icon";

export default function SubmissionsTableContent({ user, submissions }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);
  const [dialogType, setDialogType] = useState("");
  const router = useRouter();

  const pendingSubmissions = submissions.filter(
    (submission) => submission.status === "Pending"
  );
  const approvedRejectedSubmissions = submissions.filter(
    (submission) =>
      submission.status === "Approved" || submission.status === "Rejected"
  );

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    if (isNaN(date)) {
      console.error("Invalid date format:", dateTimeString);
      return { dateString: "Invalid Date", timeString: "Invalid Time" };
    }

    const dateString = date.toISOString().substring(0, 10); // YYYY-MM-DD
    const timeString = date.toTimeString().substring(0, 5); // HH:MM

    return { dateString, timeString };
  };

  const handleApprove = (submissionId) => {
    setCurrentAction("Approve");
    setSubmissionId(submissionId);
    setDialogType("approve");
    setOpenDialog(true);
  };

  const handleReject = (submissionId) => {
    setCurrentAction("Reject");
    setSubmissionId(submissionId);
    setDialogType("reject");
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSubmissionId(null);
    setCurrentAction(null);
    setDialogType("");
  };

  const handleDialogConfirm = async () => {
    try {
      const response = await fetch(`/api/submissions/${submissionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: dialogType === "approve" ? "Approved" : "Rejected",
          review_comments: "No comments",
        }),
      });
      const result = await response.json();

      if (response.ok) {
        // Reload or update the state accordingly
        router.refresh();
      } else {
        alert(
          `Failed to ${currentAction.toLowerCase()} submission: ${
            result.detail
          }`
        );
      }
    } catch (error) {
      console.error("Error updating submission:", error);
      alert(`Failed to ${currentAction.toLowerCase()} submission.`);
    } finally {
      handleDialogClose();
    }
  };

  // Define common columns for the tables
  const columns = [
    { field: "user_roll_no", headerName: "User ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 2 },
    {
      field: "is_poster",
      headerName: "Poster",
      flex: 1,
      renderCell: ({ value }) => (
        <Icon
          variant={value ? "check" : "cancel"}
          color={value ? "success.main" : "error.main"}
        />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ value }) => (
        <Typography
          variant="body2"
          sx={{
            color:
              value === "Pending"
                ? "warning.main"
                : value === "Approved"
                ? "success.main"
                : "error.main",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {value}
        </Typography>
      ),
    },
    {
      field: "submitted_at",
      headerName: "Submitted At",
      flex: 1,
      renderCell: ({ value }) => {
        const { dateString, timeString } = formatDateTime(value);
        return (
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            {dateString} {timeString}
          </Typography>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          sx={{ display: "flex", gap: 1, alignItems: "center", height: "100%" }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              router.push(`/applications/submissions/${row.submission_id}`)
            }
          >
            Open
          </Button>
          {(row?.status === "Pending" || row?.status === "Rejected") && (
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => handleApprove(row?.submission_id)}
            >
              Approve
            </Button>
          )}
          {(row?.status === "Pending" || row?.status === "Approved") && (
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleReject(row?.submission_id)}
            >
              Decline
            </Button>
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Welcome, {user.uid}! Here are the submissions:
      </Typography>

      {/* Pending Submissions Table */}
      <Box sx={{ mt: 4, p: 2, border: "1px solid #ccc", borderRadius: "8px" }}>
        <Typography variant="h6" gutterBottom>
          Pending Submissions
        </Typography>
        <DataGrid
          rows={pendingSubmissions}
          columns={columns}
          getRowId={(row) => row.user_roll_no}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "action.hover",
              cursor: "pointer",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "background.paper",
              fontWeight: "bold",
            },
          }}
        />
      </Box>

      {/* Approved Submissions Table */}
      <Box sx={{ mt: 4, p: 2, border: "1px solid #ccc", borderRadius: "8px" }}>
        <Typography variant="h6" gutterBottom>
          Approved/Rejected Submissions
        </Typography>
        <DataGrid
          rows={approvedRejectedSubmissions}
          columns={columns}
          getRowId={(row) => row.user_roll_no}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "action.hover",
              cursor: "pointer",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "background.paper",
              fontWeight: "bold",
            },
          }}
        />
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          Are you sure you want to {dialogType} this submission?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            This action will update the status of the submission.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
