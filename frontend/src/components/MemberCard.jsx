import { Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
                  {person.batch}
                </Box>
              </Box>
              {person.email && (
                <IconButton
                  href={`mailto:${person.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Email ${person.name}`}
                >
                  <EmailIcon color="primary" />
                </IconButton>
              )}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
