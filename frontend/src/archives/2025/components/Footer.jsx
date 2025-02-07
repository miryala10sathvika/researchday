import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Logo and Copyright */}
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" color="textSecondary">
              &copy; 2025 IIITH. All rights reserved.
            </Typography>
          </Box>

          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            {/* <Link href="#about" underline="hover" color="inherit">
              About Us
            </Link> */}
            <Link
              href="mailto:researchfest.iiit.ac.in"
              underline="hover"
              color="inherit"
            >
              Contact Us
            </Link>
            <Link href="/archives/2025/organization" underline="hover" color="inherit">
              Team
            </Link>
          </Box>
        </Box>

        {/* Last Updated */}
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          marginTop={2}
          fontStyle="italic"
        >
          Last updated: January 08, 2025.
        </Typography>
      </Box>
    </footer>
  );
}
