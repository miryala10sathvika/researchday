import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400'],
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Box
          sx={{
            width: "100%",
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
