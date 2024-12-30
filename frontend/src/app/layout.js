import "./globals.css";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap" />
      </head>
      <body>
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
      </body>
    </html>
  );
}