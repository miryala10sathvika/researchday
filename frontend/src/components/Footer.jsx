import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#f8f9fa", padding: "20px 0", marginTop: "auto" }}>
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
                            &copy; 2024 IIITH. All rights reserved.
                        </Typography>
                    </Box>

                    {/* Links */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2,
                        }}
                    >
                        <Link href="#about" underline="hover" color="inherit">
                            About Us
                        </Link>
                        <Link href="#contact" underline="hover" color="inherit">
                            Contact
                        </Link>
                        <Link href="#privacy" underline="hover" color="inherit">
                            Privacy Policy
                        </Link>
                    </Box>

                    {/* Socials */}
                    <Box display="flex" gap={1}>
                        <IconButton href="https://facebook.com" target="_blank" color="inherit">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://twitter.com" target="_blank" color="inherit">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="https://instagram.com" target="_blank" color="inherit">
                            <InstagramIcon />
                        </IconButton>
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
                    Last updated: December 25, 2024, 10:56:56.
                </Typography>
            </Box>
        </footer>
    );
}
