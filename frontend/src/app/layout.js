import "./globals.css";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";
import { getUser } from 'utils/verification';

export const metadata = {
  title: "Student Conference IIITH",
  description:
    "A student conference organized by students to show case their work",
  authors: ["SERC Students"],
};

export default async function RootLayout({ children }) {
  const user = await getUser();

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
      </body>
    </html>
  );
}
