import { Box } from "@mui/material";
import React from "react";

export default function MemberCard({ position, members }) {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        bgcolor: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "max-content",
      }}
    >
      <Box
        bgcolor="var(--theme-bg-color)"
        color="#ffffff"
        p={2}
        fontSize="1.2em"
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
      >
        {position}
      </Box>
      <Box p={2}>
        {members.map((person, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Box
                component="hr"
                border="none"
                borderTop="1px solid #e0e0e0"
                my={1}
              />
            )}
            <Box>
              <Box
                component="p"
                color="#333333"
                fontSize="1em"
                fontWeight="600"
                mb={1}
              >
                {person.name}
              </Box>
              <Box
                component="p"
                color="#666666"
                fontSize="0.9em"
                textAlign={"left"}
              >
                {person.institute}
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
