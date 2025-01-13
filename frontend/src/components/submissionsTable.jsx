"use client";

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {  
  Typography,
  Box,
  Button,
  CircularProgress
} from "@mui/material";
import { useRouter } from "next/navigation";
import { getDatetimeformat } from "utils/dateTime";
import DownloadCsv from "components/DownloadCsv";

export default function SubmissionsTable({ user, submissions }) {
  const [loading, setLoading] = useState(true);
  const [pendingSubmissions, setPendingSubmissions] = useState([]);
  const [approvedRejectedSubmissions, setApprovedRejectedSubmissions] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data from an API)
    const fetchData = async () => {
      setLoading(true);
      try {
        // Filter the submissions
        setPendingSubmissions(
          submissions.filter(
            (submission) =>
              submission?.status === "Pending" || submission?.status === "Revision Requested"
          )
        );

        setApprovedRejectedSubmissions(
          submissions.filter(
            (submission) =>
              submission?.status === "Accepted" || submission?.status === "Rejected"
          )
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submissions]);

  const columns = [
    { field: "user_roll_no", headerName: "User ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 2 },
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
                ? "info.main"
                : value === "Accepted"
                ? "success.main" : value === "Revision Requested" ? "warning.main"
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
        const { dateString, timeString } = getDatetimeformat(value);
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
        </Box>
      ),
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <Typography variant="h5" gutterBottom>
          Welcome, {user?.name}! Here are the submissions:
        </Typography>
        <DownloadCsv submissions={submissions} />
      </Box>

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
    </Box>
  );
}
