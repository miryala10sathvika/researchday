import "./globals.css";
import { Box } from "@mui/material";
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

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Organization",
      href: "/organization",
      // submenu: [
      //     { label: "Submenu 1", href: "/organization/submenu1" },
      //     { label: "Submenu 2", href: "/organization/submenu2" },
      //     { label: "Submenu 3", href: "/organization/submenu3" },
      // ],
    },
    ...(user
      ? [
          { label: "Application", href: "/applications" },
          { label: "Logout", href: "/api/logout" },
        ]
      : [{ label: "Login", href: "/api/login" }]),
  ];

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
