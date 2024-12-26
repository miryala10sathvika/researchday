import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const image = {
    url: "/assets/logo.jpg",
    alt: "IIITH Students Conference",
};

export default function Header() {
    return (
        <Box sx={{ width: "100%", overflow: "hidden", margin: "auto" }}>
            {/* Navbar Section */}
            <nav 
                style={{
                    width: "100%",
                    borderBottom: "1px solid #e0e0e0",
                    backgroundColor: "white",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
            >
                <div className="navbar-container" style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    {/* Logo Section */}
                    <div className="logo-section">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={120}
                            height={50}
                            style={{ mixBlendMode: "multiply" }}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links" style={{
                        display: "flex",
                        gap: "2rem",
                    }}>
                        <Link 
                            href="/" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.5rem 1rem",
                                transition: "color 0.3s ease",
                            }}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/organisation" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.5rem 1rem",
                                transition: "color 0.3s ease",
                            }}
                        >
                            Organisation
                        </Link>
                        <Link 
                            href="/applications" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.5rem 1rem",
                                transition: "color 0.3s ease",
                            }}
                        >
                            Applications
                        </Link>
                        <Link 
                            href="/program" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.5rem 1rem",
                                transition: "color 0.3s ease",
                            }}
                        >
                            Program
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content Section */}
            <Box display="flex" justifyContent="space-between" mt={3}>
                {/* Logo and Info Box */}
                <Box
                    flex={1}
                    sx={{
                        backgroundColor: "#e0e8ef",
                        borderRadius: 2,
                        boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.1)",
                        textAlign: "center",
                        margin: "0 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "300px",
                    }}
                >
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={250}
                        height={100}
                        style={{ mixBlendMode: "multiply" }}
                    />
                    <Typography variant="h6" mt={2} mb={1}>
                        February 15-17, 2024
                    </Typography>
                    <Typography variant="body1">
                        Gachibowli, Hyderabad,
                        <br />
                        India
                    </Typography>
                </Box>
                
                {/* Carousel Box */}
                <Box
                    flex={1}
                    sx={{
                        margin: "0 8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "300px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h4">
                        Here comes the carousel
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
