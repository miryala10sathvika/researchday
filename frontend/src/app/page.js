import { Box, Typography, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const importantDates = [
  {
    date: "January 1st week",
    event: "Release of the registrations",
  },
  {
    date: "January 2nd week",
    event: "Presentation Registration Submission Deadline",
  },
  {
    date: "January 3rd week",
    event: "Participation Registration Submission Deadline",
  },
  {
    date: "January 3rd week",
    event: "Notification of Acceptance",
  },
  {
    date: "February 2nd week",
    event: "Conference Dates",
  },
];

const news = [
  {
    date: "January 1st week",
    content: "Registration portal is now open",
  },
  {
    date: "January 3rd week",
    content: "Acceptance of presentations and posters is released",
  },
];

const bannerImage = "/assets/banner.jpg";
export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        margin: "auto",
        minHeight: "80vh",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ width: "100%", position: "relative", height: "400px" }}>
        {/* Background Image */}
        <Image
          src={bannerImage}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Overlay Text */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "left",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            IIITH Research Fest 2025
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ignite Innovation, Inspire Collaboration
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 4,
          gap: 4,
          ml: { xs: 2, md: 20 }, // Margin left adjusts for xs and md screens
          mr: { xs: 2, md: 20 }, // Margin right adjusts for xs and md screens
          backgroundColor: "white",
          color: "#1a1a1a",
        }}
      >
        <Box flex={1} sx={{ backgroundColor: "white" }}>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.6,
              margin: "20px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Research Fest @ IIITH - 2025
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.5rem" }}>
              The Research Fest is an annual event celebrating research and
              innovation on our campus. Designed as a mini internal conference,
              it provides a platform for students to present their accepted or
              published papers and showcase their work through conference-style
              paper presentations and poster sessions. The event fosters
              interdisciplinary discussions, highlights academic excellence, and
              encourages networking within the research community.
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.5rem" }}>
              Open to Dual Degree, Masters, and PhD students, the Research Fest
              offers a unique opportunity to share ideas, explore diverse
              projects, and gain hands-on experience in presenting research.
              Join us in celebrating the spirit of inquiry and advancing
              knowledge together!
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Contact
            </Typography>
            <Typography sx={{ fontSize: "1.1rem" }}>
              If you have any questions, please contact us via e-mail at:{" "}
              <Link
                href="mailto:researchfest@iiit.ac.in"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                researchfest@iiit.ac.in
              </Link>
            </Typography>
          </div>
        </Box>

        {/* Right Content */}
        <Box flex={1} sx={{ margin: "20px", backgroundColor: "white" }}>
          {/* Important Dates */}
          <Paper
            elevation={3}
            sx={{ padding: 3, backgroundColor: "white", marginBottom: 4 }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#1976d2",
                borderBottom: "2px solid #1976d2",
                paddingBottom: 1,
              }}
            >
              Important Dates
            </Typography>
            {importantDates.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666", fontSize: "1.1rem" }}
                >
                  {item.event}
                </Typography>
              </Box>
            ))}
          </Paper>

          {/* Latest News */}
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: "white" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#1976d2",
                borderBottom: "2px solid #1976d2",
                paddingBottom: 1,
              }}
            >
              Latest News
            </Typography>
            {news.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666", fontSize: "1.1rem" }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
