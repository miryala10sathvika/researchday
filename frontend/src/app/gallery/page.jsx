"use client";

import { useEffect } from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import Masonry from "react-masonry-css";

const itemData = [
    { img: "/gallery/1.jpg", width: 800, height: 600 },
    { img: "/gallery/2.jpg", width: 400, height: 600 },
    { img: "/gallery/3.jpg", width: 800, height: 600 },
    { img: "/gallery/4.jpg", width: 400, height: 600 },
    { img: "/gallery/5.jpg", width: 800, height: 600 },
    { img: "/gallery/6.jpg", width: 400, height: 600 },
];

export default function Gallery() {
    const masonryStyles = `
        .my-masonry-grid {
            display: flex;
            margin-left: -16px;
            width: auto;
        }
        .my-masonry-grid_column {
            padding-left: 16px;
            background-clip: padding-box;
        }
        .my-masonry-grid_column > div:hover {
            transition: 0.1s ease-in-out;
            transform: scale(1.05);
        }
    `;
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };
    
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = masonryStyles;
        document.head.appendChild(styleSheet);
    
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, p: 4 }}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {itemData.map((item, index) => (
                    <div key={index} style={{ marginBottom: "16px" }}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: `${item.width} / ${item.height}`, // Maintain aspect ratio
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            <Image
                                src={item.img}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Masonry>
        </Container>
    );
}