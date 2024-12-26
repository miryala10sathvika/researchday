import { Box, Typography, Paper } from "@mui/material";
import Link from 'next/link';

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

export default function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "auto" }}>
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Box flex={1}>
          <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, margin: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Research Fest @ IIIT-H - 2025
            </Typography>
            <Typography paragraph>
              The Research Fest is an annual event celebrating research and innovation on our campus. Designed as a mini internal conference, it provides a platform for students to present their accepted or published papers and showcase their work through conference-style paper presentations and poster sessions. The event fosters interdisciplinary discussions, highlights academic excellence, and encourages networking within the research community.
            </Typography>
            <Typography paragraph>
              Open to Dual Degree, Masters, and PhD students, the Research Fest offers a unique opportunity to share ideas, explore diverse projects, and gain hands-on experience in presenting research. Join us in celebrating the spirit of inquiry and advancing knowledge together!
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Contact
            </Typography>
            <Typography>
              If you have any questions, please contact us via e-mail at:{' '}
              <Link href="mailto:researchfest@iiit.ac.in" style={{ color: 'blue', textDecoration: 'underline' }}>
                researchfest@iiit.ac.in
              </Link>
            </Typography>
          </div>
        </Box>

        <Box flex={1} sx={{ margin: '20px' }}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#f8f9fa' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', borderBottom: '2px solid #1976d2', paddingBottom: 1 }}>
              Important Dates
            </Typography>
            {importantDates.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.date}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  {item.event}
                </Typography>
              </Box>
            ))}

            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', borderBottom: '2px solid #1976d2', paddingBottom: 1, mt: 4 }}>
              Latest News
            </Typography>
            {news.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.date}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
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
