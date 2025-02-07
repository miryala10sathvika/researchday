import MemberCard from "archives/2025/components/MemberCard";
import { Box } from "@mui/material";
import team from "archives/2025/constants/team";

export default function Organization() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
        padding: "20px",
        ml: { xs: 0, lg: 25 },
        mr: { xs: 0, lg: 25 },
        mt: 15,
      }}
    >
      {/* First Column */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {team.slice(0, 2).map((item, index) => (
          <MemberCard key={index} position={item.position} members={item.members} />
        ))}
      </Box>

      {/* Second Column */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        {team.slice(2, 5).map((item, index) => (
          <MemberCard key={index} position={item.position} members={item.members} />
        ))}
      </Box>
    </Box>
  );
}
