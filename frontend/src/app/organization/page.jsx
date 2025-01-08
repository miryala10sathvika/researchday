import React from "react";
import Card from "components/MemberCard";
import { Box } from "@mui/material";

const organizers = [
  {
    position: "Program Chair",
    members: [
      {
        name: "A Aparajitha",
        institute: "IIIT Hyderabad",
        email: "aparajitha.allamraju@research.iiit.ac.in",
      },
      {
        name: "Shodasakshari Vidya",
        institute: "IIIT Hyderabad",
        email: "shodasakshari.vidya@research.iiit.ac.in",
      },
      {
        name: "Furqan Shaik",
        institute: "IIIT Hyderabad",
        email: "furqan.shaik@research.iiit.ac.in",
      },
      {
        name: "Sudarshan Srinivasan",
        institute: "IIIT Hyderabad",
        email: "sudarshan.srinivasan@research.iiit.ac.in",
      },
    ],
  },
  {
    position: "Web Team",
    members: [
      { name: "Bhav Beri", institute: "IIIT Hyderabad" },
      { name: "Aaditya Narain", institute: "IIIT Hyderabad" },
      { name: "Adari Dileepkumar", institute: "IIIT Hyderabad" },
      { name: "Sathvika Miryala", institute: "IIIT Hyderabad" },
      { name: "D Sree Yashaswinee", institute: "IIIT Hyderabad" },
    ],
  },
  {
    position: "Publicity Team",
    members: [
      { name: "Anagha Pradeep", institute: "IIIT Hyderabad" },
      { name: "Bhav Beri", institute: "IIIT Hyderabad" },
      { name: "Gargie Tambe", institute: "IIIT Hyderabad" },
    ],
  },
  {
    position: "Organizing Committee",
    members: [
      { name: "Chandrasekar S", institute: "IIIT Hyderabad" },
      { name: "Kaveri Anuranjana", institute: "IIIT Hyderabad" },
      { name: "Vedula Bhaskara Hanuma", institute: "IIIT Hyderabad" },
      { name: "Janaksinh Ven", institute: "IIIT Hyderabad" },
      { name: "Rasheed", institute: "IIIT Hyderabad" },
      { name: "Lokesh V", institute: "IIIT Hyderabad" },
      { name: "Aaryan Sharma", institute: "IIIT Hyderabad" },
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
          <Card key={index} position={item.position} members={item.members} />
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
          <Card key={index} position={item.position} members={item.members} />
        ))}
      </Box>
    </Box>
  );
}
