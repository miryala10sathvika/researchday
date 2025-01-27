import { Box, Typography, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { getImportantDates, getAnnouncements } from "utils/backend_calls";

const importantDatesMapping = {
  attendee_registration_start: "Attendee Registration Start Date",
  attendee_registration_end: "Attendee Registration End Date",
  presenter_registration_deadline: "Presenter Registration Deadline",
  results_day: "Notifications",
};

const bannerImage = "/assets/banner.jpg";
export default async function Home() {
  const importantDates = await getImportantDates();
  const currentDate = new Date(); // Get current date
  const sortedDates = Object.entries(importantDates).sort((a, b) => {
    return new Date(a[1]) - new Date(b[1]); // Sort by date in ascending order
  });

  const announcements = await getAnnouncements();
  const sortedAnnouncements = announcements.sort((a, b) => {
    return new Date(b.date) - new Date(a.date); // Sort by date in descending order
  });

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
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // optional dark overlay
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              ml: { xs: 2, md: 0 },
            }}
          >
            IIITH Research Fest 2025
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                February 8-9, 2025
              </Typography>
              
              <Typography variant="subtitle1" sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                mt: 1,
                mb: 1,
              }}>
                IIIT Hyderabad, Gachibowli
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
        <Box flex={3} sx={{ backgroundColor: "white" }}>
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
            <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>
              February 8-9, 2025
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.25rem" }}>
              The Research Fest is an annual event celebrating research and
              innovation on our campus. Designed as a mini internal conference,
              it provides a platform for students to present their accepted or
              published papers and showcase their work through conference-style
              paper presentations and poster sessions. The event fosters
              interdisciplinary discussions, highlights academic excellence, and
              encourages networking within the research community.
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.25rem" }}>
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
        <Box flex={2} sx={{ margin: "20px", backgroundColor: "white" }}>
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
            {sortedAnnouncements.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {new Date(item.date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
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

          {/* Important Dates */}
          <Paper
            elevation={3}
            sx={{ padding: 3, backgroundColor: "white", marginTop: 4 }}
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
            <Box>
              {sortedDates.map(([key, value], index) => {
                const isPastDate = new Date(value) < currentDate; // Check if the date is in the past

                return (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {importantDatesMapping[key]}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: "1.1rem",
                        textDecoration: isPastDate ? "line-through" : "none", // Apply strike-through if the date is past
                      }}
                    >
                      {new Date(value).toLocaleString("en-US", {
                        weekday: "long",
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            {/* {
              // importantDates.map((item, index) => (
              importantDates.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666", fontSize: "1.1rem" }}
                >
                  {
                </Typography>
              </Box>
            ))} */}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
