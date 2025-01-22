import React from "react";
import MemberCard from "components/MemberCard";
import { Box } from "@mui/material";

const organizers = [
  {
    position: "Program Chair",
    members: [
      {
        name: "A Aparajitha",
        batch: "PhD() 2k",
        email: "aparajitha.allamraju@research.iiit.ac.in",
      },
      {
        name: "Furqan Shaik",
        batch: "PhD() 2k",
        email: "furqan.shaik@research.iiit.ac.in",
      },
      {
        name: "Shodasakshari Vidya",
        batch: "PhD() 2k",
        email: "shodasakshari.vidya@research.iiit.ac.in",
      },
      {
        name: "Sudarshan Srinivasan",
        batch: "PhD() 2k",
        email: "sudarshan.srinivasan@research.iiit.ac.in",
      },
    ],
  },
  {
    position: "Web Team",
    members: [
      { name: "Bhav Beri", batch: "CSD 2k21" },
      { name: "Aaditya Narain", batch: "CSD 2k22" },
      { name: "Adari Dileepkumar", batch: "CSE 2k22" },
      { name: "Sathvika Miryala", batch: "CSD 2k22" },
      { name: "D Sree Yashaswinee", batch: "CSD 2k22" },
    ],
  },
  {
    position: "Publicity Team",
    members: [
      { name: "Anagha Pradeep", batch: "PhD(CL) 2k22" },
      { name: "Bhav Beri", batch: "CSD 2k21" },
      { name: "Gargie Tambe", batch: "CSD 2k22" },
      { name : "Hiya Bhatt", batch: "MS(CSE) 2k24"}
    ],
  },
  {
    position: "Organizing Committee",
    members: [
      { name: "Chandrasekar S", batch: "MS(CSE) 2k24" },
      { name: "Kaveri Anuranjana", batch: "IIIT Hyderabad" },
      { name: "Vedula Bhaskara Hanuma", batch: "IIIT Hyderabad" },
      { name: "Janaksinh Ven", batch: "IIIT Hyderabad" },
      { name: "Rasheed", batch: "IIIT Hyderabad" },
      { name: "Lokesh V", batch: "IIIT Hyderabad" },
      { name: "Aaryan Sharma", batch: "IIIT Hyderabad" },
    ],
  },
];

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
        {organizers.slice(0, 2).map((item, index) => (
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
        {organizers.slice(2, 5).map((item, index) => (
          <MemberCard key={index} position={item.position} members={item.members} />
        ))}
      </Box>
    </Box>
  );
}
