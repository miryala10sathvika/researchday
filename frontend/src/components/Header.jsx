import { Box, Typography } from "@mui/material";
import Image from "next/image";

const image = {
    url: "/assets/logo.jpg",
    alt: "IIITH Students Conference",
};

export default function Header() {
    return (
        <Box sx={{ width: "100%", overflow: "hidden", margin: "auto" }}>
            <Box display="flex" justifyContent="space-between" mt={1}>
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

                {/* Second Box */}
                <Box
                    flex={1}
                    sx={{
                        margin: "0 8px", // Add consistent margin for spacing
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "300px", // Match height with the first Box
                        backgroundColor: "#f9f9f9", // Optional background for visual balance
                        borderRadius: 2,
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>
                        Here comes the carousel
                    </h1>
                    {/* <Carousel /> */}
                </Box>
            </Box>
            <Box>
                <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                    The Navbar Comes here
                </Typography>
            </Box>
        </Box>
    );
}
