"use client";

import React, { useState } from "react";

import { TextField, Button, Box, Typography } from "@mui/material";

export default function AddAnnouncementForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const responseOK = await addAnnouncement({ content: title, date });
      if (responseOK) {
        alert("Announcement added successfully!");
        setTitle("");
        setDate(new Date().toISOString().split("T")[0]);
      } else {
        throw new Error("Failed to add announcement.");
      }
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 1000,
          mx: "auto",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add Announcement
        </Typography>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          inputProps={{
            max: new Date().toISOString().split("T")[0],
            min: "2024-12-01",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          sx={{
            backgroundColor: "var(--theme-bg-color)",
          }}
        >
          {loading ? "Submitting..." : "Add Announcement"}
        </Button>
      </Box>
    </Box>
  );
}

async function addAnnouncement(announcement) {
  const { content, date } = announcement;

  // Construct the query string
  const query = new URLSearchParams({ content, date }).toString();

  const response = await fetch(`/api/add-announcement?${query}`, {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    credentials: "include",
  });

  return response.ok;
}
