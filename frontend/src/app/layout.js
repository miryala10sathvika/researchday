import "./globals.css";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";
import { AuthProvider } from "providers/AuthProvider";

export const metadata = {
  title: "Student Conference IIITH",
  description: "A student conference organized by students to show case their work",
  authors: [
    "SERC Students"
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap" />
      </head>
      <body>
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  );
}