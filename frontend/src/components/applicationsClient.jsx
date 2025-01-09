"use client";

import { Box, Button, Typography, Paper, Grid, Divider } from "@mui/material";
import { getDatetimeformat } from "utils/dateTime";
import Link from "next/link";

export default function ApplicationsClient({ submitted, user, admins }) {
  const isSubmitted = submitted && submitted.length !== 0;

  return (
    <Box
      sx={{
        padding: "20px",
        margin: "60px auto",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      {/* Greetings Section */}
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Hello,{" "}
        {user.uid
          .split(".") // Split the UID by dots
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each part
          .join(" ")}{" "}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color:
            submitted?.status === "Accepted"
              ? "#28a745"
              : submitted?.status === "Rejected"
                ? "#dc3545"
                : submitted?.status === "Revision Requested"
                  ? "#ff8f07"
                  : "#777",
          marginTop: "30px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        {isSubmitted
          ? submitted.status === "Accepted"
            ? `Your application has been accepted for ${submitted.is_poster ? "poster" : "Paper"} presentation . Congratulations!`
            : submitted.status === "Rejected"
              ? "Your application has been rejected. Don't worry, you can try again."
              : submitted.status === "Revision Requested"
                ? "Your application has been reviewed and revision is requested."
                : "Your application is under review."
          : "You have not yet submitted your application."}
      </Typography>

      {isSubmitted && submitted.status !== "Pending" && (
        <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Feedback Comments
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" flexWrap="wrap">{submitted.review_comments}</Typography>
          </Paper>
        </Box>
      )}

      {/* Application Details Section */}
      {isSubmitted && (
        <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Application Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2} textAlign={"left"}>
              {[
                { label: "Student Roll No", value: submitted.user_roll_no },
                { label: "Title", value: submitted.title },
                {
                  label: "Author", value: user.uid
                    .split(".")
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(" ")
                },
                { label: "Co-Authors", value: submitted.co_author_names },
                { label: "Lab", value: submitted.lab_name },
                { label: "Advisor", value: submitted.advisor_name },
                { label: "Submission Type", value: submitted.submission_type },
                { label: "Forum", value: submitted.forum_name },
                { label: "Forum Level", value: submitted.forum_level },
                {
                  label: "Acceptance Date",
                  value: getDatetimeformat(submitted.acceptance_date).dateString,
                },
                { label: "Submitted On", value: getDatetimeformat(submitted.submitted_at).dateString },
              ].map((detail, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  {/* Half on left and right */}
                  <Typography variant="subtitle1" color="primary">
                    {detail.label}
                  </Typography>
                  <Typography variant="body1" paragraph flexWrap="wrap">
                    {detail.value}
                  </Typography>
                </Grid>
              ))}

            <Grid item xs={12} sm={12}>
              <Typography variant="subtitle1" color="primary">
                Abstract
              </Typography>
              <Typography variant="body1" sx={{ wordBreak: "break-all" }} dangerouslySetInnerHTML={{ __html: submitted?.abstract?.replace('\n', '<br />') }} />
            </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="primary">
                  Uploaded Paper
                </Typography>
                {submitted.file_url && (
                  <Button
                    variant="contained"
                    href={`/api/get-pdf/paper/${submitted.user_roll_no}_paper`}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    View Paper
                  </Button>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="primary">
                  Proof of Acceptance
                </Typography>
                {submitted.acceptance_proof && (
                  <Button
                    variant="contained"
                    href={`/api/get-pdf/proof/${submitted.user_roll_no}_proof`}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    View Proof
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}

      {/* Guidelines Section */}
      {!isSubmitted && (
        <Box
          sx={{
            margin: "40px auto",
            maxWidth: "800px",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Guidelines to Apply
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography
              variant="body1"
              component="ul"
              sx={{
                listStyleType: "disc",
                fontSize: "1.2rem",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              <li>
                Submit your most recent published paper for the presentation or
                poster.
              </li>
              <li>Ensure all information is accurate and up-to-date.</li>
              <li>Upload required documents in PDF format only.</li>
              <li>Review your application before final submission.</li>
            </Typography>
          </Box>
        </Box>
      )}

      {/* Action Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        {admins.includes(user.email) && (
          <Link href="/applications/submissions" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: "15px 50px",
                fontSize: "1.2rem",
                fontWeight: 700,
                borderRadius: "12px",
                backgroundColor: "var(--theme-bg-color)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "var(--theme-bg-color)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              View all Submissions
            </Button>
          </Link>
        )}
        {!isSubmitted && (
          <Link href="/applications/new" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: "15px 50px",
                fontSize: "1.2rem",
                fontWeight: 700,
                borderRadius: "12px",
                backgroundColor: "var(--theme-bg-color)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "var(--theme-bg-color)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Add New
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
