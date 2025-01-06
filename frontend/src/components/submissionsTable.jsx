"use client";

import React, { Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";
import SubmissionsTableContent from "components/submissionsTableContent";

export default function SubmissionsTable({ user, submissions }) {
  return (
    <Box sx={{ p: 4 }}>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <SubmissionsTableContent user={user} submissions={submissions} />
      </Suspense>
    </Box>
  );
}
