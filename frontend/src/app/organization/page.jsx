import React from 'react';
import Card from 'components/MemberCard';
import { Box } from '@mui/material';

const organizers = [
  {
    position: 'Program Committee Chair',
    members: [{ name: 'Arnab Bhattacharya', institute: 'IIT Kanpur' }],
  },
  {
    position: 'Organizing Chair',
    members: [{ name: 'Martin Gluckman', institute: 'Sanskrit Research Institute' }],
  },
  {
    position: 'Web Chair',
    members: [{ name: 'Hrishikesh Terdalkar', institute: 'IIT Kanpur, Kanpur, India' }],
  },
  {
    position: 'Steering Committee',
    members: [
      { name: 'Amba Kulkarni', institute: 'University of Hyderabad, Hyderabad, India' },
      { name: 'Arnab Bhattacharya', institute: 'IIT Kanpur, Kanpur, India' },
      { name: 'Brendan Gillon', institute: 'McGill University, Montreal, Canada' },
      { name: 'Gérard Huet', institute: 'INRIA, Paris, France' },
      { name: 'Malhar Kulkarni', institute: 'IIT Bombay, Mumbai, India' },
      { name: 'Pawan Goyal', institute: 'IIT Kharagpur, Kharagpur, India' },
      { name: 'Peter Scharf', institute: 'The Sanskrit Library, USA' },
    ],
  },
  {
    position: 'Technical Program Committee',
    members: [
      { name: 'Amba Kulkarni', institute: 'University of Hyderabad, Hyderabad, India' },
      { name: 'Amrith Krishna', institute: 'Manipal Academy of Higher Education, Bengaluru, India' },
      { name: 'Arjuna S R', institute: 'Manipal Academy of Higher Education, Bengaluru, India' },
      { name: 'Arnab Bhattacharya', institute: 'IIT Kanpur, Kanpur, India' },
      { name: 'Brendan Gillon', institute: 'McGill University, Montreal, Canada' },
      { name: 'Chaitali Dangarikar', institute: 'IIT Kanpur, Kanpur, India' },
      { name: 'Ganesh Ramakrishnan', institute: 'IIT Bombay, Mumbai, India' },
      { name: 'Gérard Huet', institute: 'INRIA, Paris, France' },
      { name: 'Malhar Kulkarni', institute: 'IIT Bombay, Mumbai, India' },
      { name: 'Oliver Hellwig', institute: 'University of Zurich, Zurich, Switzerland' },
      { name: 'Patrick McAllister', institute: 'Austrian Academy of Sciences, Austria' },
      { name: 'Pavankumar Satuluri', institute: 'Indian Institute of Technology Roorkee, Roorkee, India' },
      { name: 'Pawan Goyal', institute: 'IIT Kharagpur, Kharagpur, India' },
      { name: 'Peter Scharf', institute: 'The Sanskrit Library, USA' },
      { name: 'Sebastian Nehrdich', institute: 'University of Hamburg, Hamburg, Germany' },
      { name: 'Shivani V', institute: 'Karnataka Sanskrit University, Karnataka, India' },
      { name: 'Tanuja P Ajotikar', institute: 'The Sanskrit Library, USA' },
    ],
  },
];

export default function Organization() {
  return (
    <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px', ml: { xs: 0, lg: 25 }, mr: { xs: 0, lg: 25 }, mt:15 }}>
      {/* First Column */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {organizers
          .slice(0, 4)
          .map((item, index) => (
            <Card key={index} position={item.position} members={item.members} />
          ))}
      </Box>

      {/* Second Column */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
        }}
      >
        {organizers
        .slice(4, 5)
        .map((item, index) => (
            <Card key={index} position={item.position} members={item.members} />
          ))}
      </Box>
    </Box>
  );
}
