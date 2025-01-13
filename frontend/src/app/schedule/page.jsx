"use client";
import { React, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import { Box, Typography, Paper } from "@mui/material";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const conference_schedule = [
  {
    date: "February 16",
    day: 1,
    events: [
      {
        time: "8:00 - 9:30",
        event: "Registration and Breakfast",
        bgcolor: "#ffcbcb",
      },
      {
        time: "9:30 - 10:00",
        event: "Opening Remarks",
        bgcolor: "#dcaee8",
        participants: "John Doe, Jane Smith",
      },
      {
        time: "10:00 - 11:00",
        event: "Invited Talk 2",
        title: "Machine Learning for Language Processing",
        speaker: "Alexandra Ross",
        bgcolor: "#c5f8c8",
      },
      {
        time: "11:00 - 11:30",
        event: "Tea Break",
        bgcolor: "#fccb8f",
      },
      {
        time: "11:30 - 13:00",
        event: "Research Session 3",
        bgcolor: "#faf096",
        papers: [
          {
            title: "Sanskrit Syntax and Computational Models",
            authors: "Sara Lee, Matthew Clark",
          },
          {
            title: "Sanskrit Text Analysis with Deep Learning",
            authors: "George W. Brown",
          },
        ],
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch",
        bgcolor: "#c5f8c8",
      },
      {
        time: "14:00 - 15:30",
        event: "Research Session 4",
        bgcolor: "#faf096"
      },
    ],
  },
  {
    date: "February 17",
    day: 2,
    events: [
      {
        time: "8:00 - 9:30",
        event: "Registration and Breakfast",
        bgcolor: "#ffcbcb",
      },
      {
        time: "9:30 - 10:00",
        event: "Opening Remarks",
        bgcolor: "#dcaee8",
        participants: "Michael Lee, Sofia Carter",
      },
      {
        time: "10:00 - 11:00",
        event: "Invited Talk 3",
        title: "Advances in Sanskrit Computational Linguistics",
        speaker: "Ramesh Chandra",
        bgcolor: "#c5f8c8",
      },
      {
        time: "11:00 - 11:30",
        event: "Tea Break",
        bgcolor: "#fccb8f",
      },
      {
        time: "11:30 - 13:00",
        event: "Research Session 5",
        bgcolor: "#faf096",
        papers: [
          {
            title: "Improved Models for Sanskrit Text Generation",
            authors: "Emma Williams, Henry Patel",
          },
          {
            title: "Sanskrit Word Embeddings for NLP Tasks",
            authors: "Katherine Grant",
          },
        ],
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch",
        bgcolor: "#c5f8c8", 
      },
      {
        time: "14:00 - 15:30",
        event: "Research Session 6",
        bgcolor: "#faf096",
      },
    ],
  },
];

function day(content) {
  let val = content[content.length - 1];

  return (

    <div style={{width: "100%"}}>

    <Typography variant="h6" component="h3" style={{ margin: "0px 0" }}>
      {conference_schedule[val-1].date}
    </Typography>

    {conference_schedule[val - 1].events.map((event, index) => (
        <div>
            <Table>
            {/* handle time and event */}
            <TableRow key={index}>
                <TableCell
                component="th"
                scope="row"
                style={{
                    backgroundColor: "var(--theme-bg-color)",
                    color: "white",
                    width: "150px",
                }}
                >
                <strong>{event.time}</strong>
                </TableCell>
                <TableCell
                align="left"
                style={{
                    width: "100%",
                    backgroundColor: event.bgcolor,
                    display: "flex",
                    alignItems: "center",
                }}>
                <strong>{event.event}</strong>
                </TableCell>
            </TableRow>

            {/* handle participants */}

            {event.participants && (
                <TableRow key={index+10}>
                <TableCell></TableCell>
                <TableCell style={{ fontStyle: "italic", color: "grey" }}>
                    {event.participants}
                </TableCell>
                </TableRow>
            )}

            {/* handle papers and their authors */}
            {event.papers && (
                <>
                {event.papers.map((paper, index2) => (
                    <TableRow key={index2+100}>
                    <TableCell></TableCell>
                    <TableCell>
                        <p style={{}}>
                        <strong> {paper.title} </strong>
                        </p>
                        <p style={{ color: "grey", fontStyle: "italic" }}>
                        {paper.authors}
                        </p>
                    </TableCell>
                    </TableRow>
                ))}
                </>
            )}
            </Table>
        </div>
    ))}
    </div>

);
}

function ToggleButton() {
  const [dayVal, setDayVal] = useState("Day 1");

  return (
    <div>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        style={{ margin: "20px 0" }}
      >
        <Button onClick={() => setDayVal("Day 1")}>Day 1</Button>
        <Button onClick={() => setDayVal("Day 2")}>Day 2</Button>
        {/* <Button onClick={() => setDayVal("Day 3")}>Day 3</Button> */}
      </ButtonGroup>

      {day(dayVal)}
    </div>
  );
}

function page() {
  return (
    <Typography
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
    }}
    >
      <div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'Inter, sans-serif',
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        fontWeight: 700,
        letterSpacing: '-0.02em',
        '& span': {
            background: 'linear-gradient(45deg, var(--theme-bg-color), #3f51b5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        width: "100%", // Ensures full width
        boxSizing: "border-box", // Includes padding in width calculation
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            position: "relative",
            display: "inline-block",
            color: "var(--theme-bg-color)",
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: 4,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #3f51b5, transparent)",
            },
          }}
        >
          Schedule
        </Typography>

        <Alert severity="info" style={{  alignItems: "center" }}>
          <p style={{ alignItems: "center" }}>
            Please note that the schedule is tentative and subject to change.
          </p>
        </Alert>

        {ToggleButton()}
      </div>
    </Typography>
  );
}

export default page;
