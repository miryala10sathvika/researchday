"use client";
import { React, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import {
  Box,
  Typography,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Container,
} from "@mui/material";

import { conference_schedule } from "constants/schedule";

function day(content) {
  let val = content[content.length - 1];

  return (
    <Box style={{ width: "100%" }}>
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-table {
              display: block;
            }

            .responsive-table table {
              width: 100%;
              table-layout: auto;
            }

            .responsive-table th, .responsive-table td {
              display: inline-block;
            }
          }
          `}
      </style>
      <Typography variant="h6" component="h3" style={{ margin: "0px 0" }}>
        {conference_schedule[val - 1].date}
      </Typography>

      {conference_schedule[val - 1].events.map((event, index) => (
        <Box style={{ marginBottom: "5px" }} key={index}>
          <div className="responsive-table">
            <Table style={{ border: "1.5px solid rgb(166, 167, 169, 0.5) " }}>
              <TableBody>
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      backgroundColor: "#717780",
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
                    }}
                  >
                    <strong>{event.event}</strong>
                  </TableCell>
                </TableRow>

                {/* handle participants */}

                {event.participants && (
                  <TableRow key={index + 10}>
                    <TableCell
                      sx={{
                        "@media (max-width: 768px)": {
                          width: "auto",
                          padding: "0px",
                        },
                      }}
                    />
                    <TableCell
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        backgroundColor: event.lightcolor,
                      }}
                      sx={{
                        "@media (max-width: 768px)": {
                          width: "100%",
                          padding: "10px",
                        },
                      }}
                    >
                      {event.participants}
                    </TableCell>
                  </TableRow>
                )}

                {/* handle papers and their authors */}
                {event.papers && (
                  <>
                    {event.papers.map((paper, index2) => (
                      <TableRow key={index2 + 100}>
                        <TableCell
                          sx={{
                            "@media (max-width: 768px)": {
                              width: "auto",
                              padding: "0px",
                            },
                          }}
                        />
                        <TableCell
                          style={{
                            backgroundColor: event.lightcolor,
                          }}
                          sx={{
                            "@media (max-width: 768px)": {
                              width: "100%",
                              padding: "10px",
                            },
                          }}
                        >
                          <p style={{}}>
                            <strong> {paper.title} </strong>
                          </p>
                          <p style={{ color: "black", fontStyle: "italic" }}>
                            {paper.authors}
                          </p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </Box>
      ))}
    </Box>
  );
}

const DayButton = ({ day, dayVal, setDayVal }) => {
  return (
    <Button
      onClick={() => setDayVal(day)}
      style={{
        backgroundColor:
          dayVal === day ? "var(--theme-bg-color)" : "transparent",
        color: dayVal === day ? "white" : "inherit",
      }}
    >
      {day}
    </Button>
  );
};

function ToggleButton() {
  const [dayVal, setDayVal] = useState("Day 1");

  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        style={{ margin: "20px 0" }}
      >
        <DayButton day="Day 1" dayVal={dayVal} setDayVal={setDayVal} />
        <DayButton day="Day 2" dayVal={dayVal} setDayVal={setDayVal} />
      </ButtonGroup>

      {day(dayVal)}
    </>
  );
}

function SchedulePage() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
      maxWidth="lg"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 700,
          letterSpacing: "-0.02em",
          "& span": {
            background:
              "linear-gradient(45deg, var(--theme-bg-color), #3f51b5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
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
            marginBottom: 2,
          }}
        >
          Schedule
        </Typography>

        <Alert severity="info" style={{ alignItems: "center" }}>
          <p style={{ alignItems: "center" }}>
            Please note that the schedule is tentative and subject to changes.
          </p>
        </Alert>

        {ToggleButton()}
      </Box>
    </Container>
  );
}

export default SchedulePage;
