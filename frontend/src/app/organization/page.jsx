import React from 'react';
import Card from 'components/MemberCard';
import { Box } from '@mui/material';

const organizers = [
  {
    position: 'Program Chair',
    members: [
      { name: 'A Aparajitha', institute: 'IIIT Hyderabad' },
      { name: 'Shodasakshari Vidya', institute: 'IIIT Hyderabad' },
      { name: 'Furqan Shaik', institute: 'IIIT Hyderabad' },
      { name: 'Sudarshan Srinivasan', institute: 'IIIT Hyderabad' },
    ],
  },
  {
    position: 'Publicity Team',
    members: [
      { name: 'Anagha Pradeep', institute: 'IIIT Hyderabad' },
      { name: 'Bhav Beri', institute: 'IIIT Hyderabad' },
      { name: 'Gargie Tambe', institute: 'IIIT Hyderabad' },
    ],
  },
  {
    position: 'Tech Team',
    members: [
      { name: 'Miryala Sathvika', institute: 'IIIT Hyderabad' },
      { name: 'Dileep Adari', institute: 'IIIT Hyderabad' },
      { name: 'Aaditya Vardhan Narain', institute: 'IIIT Hyderabad' },
      { name: 'D Sree Yashaswinee', institute: 'IIIT Hyderabad' },
    ],
  },
  {
    position: 'Organizing Committee',
    members: [
      { name: 'Chandrasekar S', institute: 'IIIT Hyderabad' },
      { name: 'Kaveri Anuranjana', institute: 'IIIT Hyderabad' },
      { name: 'Vedula Bhaskara Hanuma', institute: 'IIIT Hyderabad' },
      { name: 'Janaksinh Ven', institute: 'IIIT Hyderabad' },
      { name: 'Rasheed', institute: 'IIIT Hyderabad' },
      { name: 'Lokesh V', institute: 'IIIT Hyderabad' },
      { name: 'Aaryan Sharma', institute: 'IIIT Hyderabad' },
    ],
  },
];

export default function Organization() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', padding: '20px', ml: { xs: 0, lg: 25 }, mr: { xs: 0, lg: 25 }, mt:15, alignItems: 'flex-start' }}>
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
          .slice(0, 3)
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
        .slice(3, 5)
        .map((item, index) => (
            <Card key={index} position={item.position} members={item.members} />
          ))}
      </Box>
    </Box>
  );
}
