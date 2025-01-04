"use client";

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, Button } from "@mui/material";

export default function SubmissionsTable({ user, submissions }) {
  const pendingSubmissions = submissions.filter((submission) => submission.status === "Pending");
  const approvedSubmissions = submissions.filter((submission) => submission.status === "approved");

  // Define common columns for the tables
  const columns = [
    { field: "user_roll_no", headerName: "User ID", width: 100 },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ value }) => (
        <Typography
          variant="body2"
          color={value === "approved" ? "success.main" : "warning.main"}
        >
          {value}
        </Typography>
      ),
    },
    {
      field: "submitted_at",
      headerName: "Submitted At",
      flex: 1,
      valueFormatter: ({ value }) => new Date(value).toLocaleString(),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => alert(`Opening details for ID: ${row.id}`)}
        >
          Open
        </Button>
      ),
    },
  ];
  console.log(pendingSubmissions);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Welcome, {user.name}! Here are the submissions:
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
          Approved Submissions
        </Typography>
        <DataGrid
          rows={approvedSubmissions}
          columns={columns}
          getRowId={(row) => row.id}
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
