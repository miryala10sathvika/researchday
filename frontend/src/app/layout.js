import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Conference IIITH",
  description: "A student conference organized by students to show case their work",
  authors: [
    "SERC Students"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" },
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <Header />
            {children}
          <Footer />
        </Box>
      </body>
    </html>
  );
}
