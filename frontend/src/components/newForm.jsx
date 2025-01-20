"use client";

import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function NewForm({ user, deadline, edit = false, submission = null }) {
  const router = useRouter();
  console.log(submission);
  const [formData, setFormData] = useState({
    title: edit && submission ? submission?.title : "",
    abstract: edit && submission ? submission?.abstract : "",
    labName: edit && submission ? submission?.lab_name : "",
    advisorName: edit && submission ? submission?.advisor_name : "",
    coAuthorNames: edit && submission ? submission?.co_author_names : "",
    submissionType: edit && submission ? submission?.submission_type : "",
    forumName: edit && submission ? submission?.forum_name : "",
    forumLevel: edit && submission ? submission?.forum_level : "",
    acceptanceDate: edit && submission ? submission?.acceptance_date : "",
  });

  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({
    mainFile: null,
    proof: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const allowedFileTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.abstract) newErrors.abstract = "Abstract is required";
    if (!formData.labName) newErrors.labName = "Lab name is required";
    if (!formData.advisorName) newErrors.advisorName = "Advisor name is required";
    if (!formData.submissionType) newErrors.submissionType = "Submission type is required";
    if (!formData.forumName) newErrors.forumName = "Forum name is required";
    if (!formData.forumLevel) newErrors.forumLevel = "Forum level is required";
    if (!formData.acceptanceDate) newErrors.acceptanceDate = "Acceptance date is required";
    if (!files.mainFile && !edit) newErrors.mainFile = "Paper file is required";
    if (!files.proof && !edit) newErrors.proof = "Proof of acceptance is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileChange = (type) => (e) => {
    const file = e.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setFiles((prev) => ({ ...prev, [type]: file }));
    } else {
      alert("Please upload a valid file type (PDF, PNG, JPG, JPEG)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user_roll_no", user.roll.toString());
      formDataToSend.append("title", formData.title);
      formDataToSend.append("abstract", formData.abstract);
      formDataToSend.append("lab_name", formData.labName);
      formDataToSend.append("advisor_name", formData.advisorName);
      formDataToSend.append("author", user?.name);
      formDataToSend.append("email", user?.email);
      formDataToSend.append("co_author_names", formData.coAuthorNames || "-");
      formDataToSend.append("submission_type", formData.submissionType);
      formDataToSend.append("forum_name", formData.forumName);
      formDataToSend.append("forum_level", formData.forumLevel);
      formDataToSend.append("acceptance_date", formData.acceptanceDate);

      if (files.mainFile) formDataToSend.append("file_url", files.mainFile);
      if (files.proof) formDataToSend.append("acceptance_proof", files.proof);

      const response = await fetch(`/api/submissions`, {
        method: edit ? "PUT" : "POST",
        body: formDataToSend,
        credentials: "include",
      });
      if (response.ok) {
        router.push(`/applications`);
      } else {
        throw new Error("Failed to submit application.");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000 * 60);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [deadline]);

  if (timeLeft.total <= 0) {
    return (
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          maxWidth: 1000,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: "1.7rem",
            textAlign: "center",
            mb: 4,
            mt: 3,
          }}
        >
          The deadline for submitting applications has passed.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 1000,
        mx: "auto",
      }}
    >
      <Paper elevation={0} sx={{ p: 6, borderRadius: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "1.7rem",
              textAlign: "center",
              mb: 4,
            }}
          >
            {edit ? "Edit Your Research Submission" : "Apply to Present Your Research"}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.2rem",
              textAlign: "center",
              color: timeLeft.days < 4 ? "error.main" : "text.secondary", // Conditionally set color
            }}
          >
            Approaching deadline in{" "}
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" error={!!errors.title}>
            <TextField
              id="title"
              value={formData.title}
              onChange={handleChange("title")}
              label="Title"
              variant="outlined"
            />
            <FormHelperText>{errors.title}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.abstract}>
            <TextField
              id="abstract"
              value={formData.abstract}
              onChange={handleChange("abstract")}
              label="Abstract"
              variant="outlined"
              multiline
              rows={4}
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.abstract}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.coAuthorNames}>
            <TextField
              id="coAuthorNames"
              value={formData.coAuthorNames}
              onChange={handleChange("coAuthorNames")}
              label="Co-author Names (if any)"
              variant="outlined"
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.coAuthorNames}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.labName}>
            <TextField
              id="labName"
              value={formData.labName}
              onChange={handleChange("labName")}
              label="Lab Name"
              variant="outlined"
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.labName}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.advisorName}>
            <TextField
              id="advisorName"
              value={formData.advisorName}
              onChange={handleChange("advisorName")}
              label="Advisor(s) Name"
              variant="outlined"
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.advisorName}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.forumName}>
            <TextField
              id="forumName"
              value={formData.forumName}
              onChange={handleChange("forumName")}
              label="Conference/Journal/Forum Name"
              variant="outlined"
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.forumName}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.forumLevel}>
            <TextField
              id="forumLevel"
              value={formData.forumLevel}
              onChange={handleChange("forumLevel")}
              label="Level of the Forum"
              variant="outlined"
              helperText="A*/A/B/Below B/Workshop/Others"
              sx={{ fontSize: "1.2rem" }}
            />
            <FormHelperText>{errors.forumLevel}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.submissionType}>
            <InputLabel id="submissionType-label">Submission Type</InputLabel>
            <Select
              labelId="submissionType-label"
              id="submissionType"
              value={formData.submissionType}
              onChange={handleChange("submissionType")}
              label="Submission Type"
            >
              <MenuItem value="Full Paper">Full Paper</MenuItem>
              <MenuItem value="Short Paper">Short Paper</MenuItem>
              <MenuItem value="Workshop Paper">Workshop Paper</MenuItem>
              <MenuItem value="Journal Paper">Journal Paper</MenuItem>
              <MenuItem value="Poster">Poster</MenuItem>
              <MenuItem value="Abstract">Abstract</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <FormHelperText>{errors.submissionType}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.acceptanceDate}>
            <TextField
              id="acceptanceDate"
              type="date"
              value={formData.acceptanceDate ? formData.acceptanceDate.split("T")[0] : ""}
              onChange={handleChange("acceptanceDate")}
              label="Acceptance Date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              inputProps={{
                // min: "2023-10-01",
                max: "2024-12-31",
              }}
            />
            <FormHelperText>{errors.acceptanceDate}</FormHelperText>
          </FormControl>

          <Grid container spacing={3} sx={{ mt: 1 }}>
            {/* Upload Paper (PDF) */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.mainFile}>
                <input
                  accept=".pdf"
                  type="file"
                  onChange={handleFileChange("mainFile")}
                  style={{ padding: "10px 0", fontSize: "1rem" }}
                />
                <FormHelperText>{errors.mainFile}</FormHelperText>
              </FormControl>
              <Typography variant="caption" display="block" gutterBottom>
                Upload Paper (PDF)
              </Typography>
            </Grid>

            {/* Upload Proof of Acceptance (PDF) */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.proof}>
                <input
                  accept=".pdf"
                  type="file"
                  onChange={handleFileChange("proof")}
                  style={{ padding: "10px 0", fontSize: "1rem" }}
                />
                <FormHelperText>{errors.proof}</FormHelperText>
              </FormControl>
              <Typography variant="caption" display="block" gutterBottom>
                Upload Proof of Acceptance (PDF)
              </Typography>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              p: 2,
              fontSize: "1.2rem",
              fontWeight: 700,
              backgroundColor: "var(--theme-bg-color)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0056b3",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
              },
            }}
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

const calculateTimeLeft = (deadline) => {
  const difference = new Date(deadline) - new Date();

  if (difference > 0) {
    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
};
