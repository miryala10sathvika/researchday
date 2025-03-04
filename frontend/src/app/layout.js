import "./globals.css";
import { Box } from "@mui/material";
import { headers } from "next/headers";

import Header from "components/Header";
import Footer from "components/Footer";
import { getUser } from "utils/verification";

export const metadata = {
  title: "Research Fest @ IIITH - 2025",
  description:
    "A mini internal conference organized by students to show case their work and present their accepted or published papers",
  authors: ["Researchfest Web Team, IIITH"],
};

export default async function RootLayout({ children }) {
  const user = await getUser();

  // Get the page path
  const headersList = await headers();
  const path = headersList.get("x-pathname");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
        />
      </head>
      <body>
        {path && !path.includes("archives") ? (
          <Box
            sx={{
              width: "100%",
              overflowX: "hidden",
              margin: "auto",
            }}
          >
            <Header user={user} />
            <Box component="main" sx={{ mt: 10 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
