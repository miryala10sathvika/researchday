import "./globals.css";
import { Box } from "@mui/material";
import Header from "archives/2025/components/Header";
import Footer from "archives/2025/components/Footer";

export const metadata = {
  title: "Research Fest @ IIITH - 2025",
  description:
    "A mini internal conference organized by students to show case their work and present their accepted or published papers",
  authors: ["Researchfest Web Team, IIITH"],
};

export default async function RootLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        margin: "auto",
      }}
    >
      <Header />
      <Box component="main" sx={{ mt: 10 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
