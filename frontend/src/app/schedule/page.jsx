"use client";
import { React, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import { Box, Typography, Paper } from "@mui/material";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const oragneDark = "#dbb07f";
const orangeLight = "#ffdbb3";
const blueDark = "#7AB2D3";
const blueLight = "#B9E5E8";
const beige = "#E6DDC4";
const beigeLight = "#f5efdf"
const pink2Dark = "#E195AB";
const pink2Light = "#FFCCE1";
const greenDark = "#91AC8F";
const greenLight = "#b6d1b4";
const purpleDark = "#bf97cf";
const purpleLight = "#ddb9eb";

const conference_schedule = [
  {
    date: "February 8",
    day: 1,
    events: [
      {
        time: "14:00 - 15:15",
        event: "Research Session 1",
        bgcolor: purpleDark,
        lightcolor: purpleLight,
        papers: [
          {
            title: "Design and Optimization of Robust Process Monitors",
            authors: "Shiva Sharma",
            lab: "CVEST",
            advisor: "Dr. Zia Abbas",
            forum: "Midwest Symposium on Circuits and Systems (MWSCAS)",
            level: "A",
          },
          {
            title:
              "Test Case Generation for Requirements in Natural Language - An LLM Comparison Study",
            authors: "Korraprolu Brahma Reddy",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "ISEC25",
            level: "Others",
          },
          {
            title:
              "FinderNet: A Data Augmentation Free Canonicalization aided Loop Detection and Closure technique",
            authors: "Chavan Aneesh Samrat",
            lab: "RRC",
            advisor: "Madhava Krishna",
            forum: "WACV",
            level: "A",
          },
          {
            title:
              "Open Vocabulary Keyword Spotting through Transfer Learning from Speech Synthesis",
            authors: "Kesavaraj V",
            lab: "LTRC",
            advisor: "Anil Kumar Vuppala",
            forum:
              "International Conference on Signal Processing and Communications",
            level: "B",
          },
          {
            title:
              "A Knowledge-Driven Approach for Dynamic Reconfiguration of Control Design",
            authors: "Amar Satyabroto Banerjee",
            lab: "SERC",
            advisor: "Dr. Venkatesh Choppella",
            forum: "IEEE Internet of Things Journal",
            level: "A*",
          },
        ],
      },
      {
        time: "15:15 - 16:00",
        event: "Tea Break",
        bgcolor: blueDark,
      },
      {
        time: "16:00 - 16:30",
        event: "Research Session 2",
        bgcolor: oragneDark,
        lightcolor: orangeLight,
        papers: [
          {
            title:
              "Open-set 3D semantic instance maps for vision language navigation",
            authors: "Laksh Nanwani",
            lab: "RRC",
            advisor: "K. Madhava Krishna",
            forum: "Advanced Robotics",
            level: "Others",
          },
        ],
      },
      {
        time: "16:30 - 17:00",
        event: "Research Session 3",
        bgcolor: pink2Dark,
        lightcolor: pink2Light,
        papers: [
          {
            title:
              "Measuring Software Development Waste in Open-Source Software Projects",
            authors: "Shanmukha Mitra V D",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "SEAA",
            level: "B",
          },
          {
            title:
              "StethoSpeech: Speech Generation Through a Clinical Stethoscope",
            authors: "Neilkumar Milankumar Shah",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum: "ACM IMWUT",
            level: "A*",
          },
          {
            title:
              "Mammo-Bench: A Large-scale Benchmark Dataset of Mammography Images",
            authors: "Bhole Gaurav Hitesh",
            lab: "CCNSB",
            advisor: "Nita Parekh",
            forum: "ICCABS 2025",
            level: "Not Sure",
          },
          {
            title:
              "MICap: A Unified Model for Identity-aware Movie Descriptions",
            authors: "Haran Raajesh",
            lab: "CVIT",
            advisor: "Makarand Tapaswi",
            forum: "CVPR 2024",
            level: "A*",
          },
        ],
      },
      {
        time: "17:00 - 18:00",
        event: "Research Session 4",
        bgcolor: greenDark,
        lightcolor: greenLight,
        papers: [
          {
            title: "Towards Revolutionized Smart Grids: An AI-Driven Broker",
            authors: "Chandlekar Sanjay Rajendrabhaia",
            lab: "MLLS",
            advisor: "Sujit Gujar",
            forum: "IJCAI-24",
            level: "A*",
          },
          {
            title: "Higher Order Structures for Graph Explanations",
            authors: "Akshit Sinha",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru",
            forum: "AAAI",
            level: "A*",
          },
          {
            title:
              "IDD-X: A Multi-View Dataset for Ego-relative Important Object Localization",
            authors: "Chirag Parikh",
            lab: "CVIT",
            advisor: "Ravi Kiran Sarvadevabhatla",
            forum: "ICRA 2024",
            level: "A*",
          },
        ],
      },
      {
        time: "18:00 - 19:00",
        event: "Research Session 5",
        bgcolor: beige,
        lightcolor: beigeLight,
        papers: [
          {
            title:
              "DashCop: Automated E-Ticket Generation for Two-Wheeler Traffic Violations",
            authors: "Deepti Rawat",
            lab: "CVIT",
            advisor: "Ravi Kiran Sarvadevabhatla",
            forum: "WACV",
            level: "A",
          },
          {
            title:
              "Analyzing 6G Satellite IoT Architecture Using Stochastic Geometry",
            authors: "B Naganjani",
            lab: "SPCRC",
            advisor: "Dr. Sachin Chaudhari",
            forum: "IEEE Globecom Workshop",
            level: "A*",
          },
          {
            title:
              "COMPUTATIONAL FRAMEWORK FOR FAILURE ANALYSIS OF FUNICULAR STRUCTURES",
            authors: "Kanukuntla Raj Kumar",
            lab: "EERC",
            advisor: "Jofin George",
            forum: "SEC-2024",
            level: "A*",
          },
          {
            title: "Enhancing Accuracy in Indic Handwritten Text Recognition",
            authors: "Evani Lalitha",
            lab: "CVIT",
            advisor: "Prof C V Jawahar",
            forum: "ICCVIP",
            level: "B",
          },
        ],
      },
    ],
  },

  {
    date: "February 9",
    day: 2,
    events: [
      {
        time: "11:00 - 12:00",
        event: "Research Session 1",
        bgcolor: purpleDark,
        lightcolor: purpleLight,
        papers: [
          {
            title:
              "LineTR: Unified Text Line Segmentation for Challenging Palm Leaf Manuscripts",
            authors: "Amal Joseph",
            lab: "CVIT",
            advisor: "Ravi Kiran S",
            forum: "ICPR",
            level: "B",
          },
          {
            title:
              "Online Partitioned Scheduling over RSU for Computation Offloading",
            authors: "Tanniru Abhinav Siddharth",
            lab: "CSG",
            advisor: "Deepak Gangadharan",
            forum: "IEEE VTC Fall-2024",
            level: "B",
          },
          {
            title: "Towards a Training Free Approach for 3D Scene Editing",
            authors: "Madhavaram Vivek Vardhan",
            lab: "MLL",
            advisor: "Charu Sharma",
            forum: "WACV",
            level: "A",
          },
          {
            title:
              "SaGE: Evaluating Moral Consistency in Large Language Models",
            authors: "Vamshi Krishna Bonagiri",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru, Manas Gaur",
            forum: "LREC-COLING 2024",
            level: "A",
          },
          {
            title:
              "Prompt-to-Correct: Automated Test-Time Pronunciation Correction",
            authors: "Ayan Kashyap",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum: "ICASSP",
            level: "A",
          },
        ],
      },
      {
        time: "12:00 - 13:00",
        event: "Research Session 2",
        bgcolor: oragneDark,
        lightcolor: orangeLight,
        papers: [
          {
            title: "Working Backwards: Mixed-Methods Approaches",
            authors: "Radheshyam Thiyagarajan",
            lab: "HSRC",
            advisor: "Nazia Akhtar",
            forum: "SMUS Conference",
            level: "NA",
          },
          {
            title: "Node Classification With Integrated Reject Option",
            authors: "Jayadratha Gayen",
            lab: "MLL",
            advisor: "Charu Sharma, Naresh Manwani",
            forum: "DAI Workshop at AAAI-2025",
            level: "Workshop",
          },
          {
            title: "Recursive Subproduct Codes with Reed-Muller-like Structure",
            authors: "Aditya Siddheshwar",
            lab: "SPCRC",
            advisor: "Prasad Krishnan",
            forum: "ISIT",
            level: "B",
          },
        ],
      },
      {
        time: "13:00 - 14:00",
        event: "Lunch Break",
        bgcolor: blueDark,
      },
      {
        time: "14:00 - 15:00",
        event: "Research Session 3",
        bgcolor: pink2Dark,
        lightcolor: pink2Light,
        papers: [
          {
            title:
              "MetaCirc: A Meta-Learning Approach for Statistical Leakage Estimation",
            authors: "N V Raghavendra",
            lab: "CVEST",
            advisor: "Dr. Zia Abbas",
            forum: "IEEE ISCAS",
            level: "A*",
          },
          {
            title: "Towards Architecting Sustainable MLOps",
            authors: "Hiya Bhatt",
            lab: "SERC",
            advisor: "Karthik Vaidhyanathan",
            forum: "ICSA",
            level: "A",
          },
          {
            title: "Emergence of Text Semantics in CLIP Image Encoders",
            authors: "Sreeram Reddy Vennam",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "UniReps @ NeurIPS 2024",
            level: "Workshop",
          },
        ],
      },
      {
        time: "15:00 - 16:00",
        event: "Panel Discussion",
        bgcolor: greenDark,
        lightcolor: greenLight,
        participants: "Prof1, Prof2, Prof3",
        moderator: "x",
      },
      {
        time: "16:00 - 16:30",
        event: "Tea Break",
        bgcolor: blueDark,
      },
      {
        time: "16:30 - 17:00",
        event: "Research Session 4",
        bgcolor: beige,
        lightcolor: beigeLight,
        papers: [
          {
            title:
              "Towards Infusing Auxiliary Knowledge for Distracted Driver Detection",
            authors: "Ishwar B Balappanawar",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "KDD Conference Workshop",
            level: "Workshop",
          },
          {
            title:
              "Random Representations Outperform Online Continually Learned Representations",
            authors: "Shiven Sinha",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "NeurIPS",
            level: "A*",
          },
        ],
      },
      {
        time: "17:00 - 18:00",
        event: "Research Session 5",
        bgcolor: purpleDark,
        lightcolor: purpleLight,
        papers: [
          {
            title: "LLMs for Generation of Architectural Components",
            authors: "Shrikara A",
            lab: "SERC",
            advisor: "Karthik Vaidhyanathan",
            forum: "ICSA",
            level: "A",
          },
          {
            title: "CSUM: A Novel Mechanism for Updating CubeSat",
            authors: "Aashish Paliwal",
            lab: "C-STAR",
            advisor: "Dr Ankit Gangwal",
            forum: "IEEE LCN",
            level: "A",
          },
          {
            title: "LLM Vocabulary Compression for Low-Compute Environments",
            authors: "Anish R Joishy",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "NeurIPS Workshop",
            level: "Workshop",
          },
        ],
      },
      {
        time: "18:00 - 19:00",
        event: "Research Session 6",
        bgcolor: oragneDark,
        lightcolor: orangeLight,
        papers: [
          {
            title: "Does Content Effect in LLMs Point to Genuine Reasoning?",
            authors: "Karthik Prasanna N",
            lab: "HSRC",
            advisor: "Dr. Ashwin Jayanti",
            forum: "BEWARE24 Workshop",
            level: "Workshop",
          },
          {
            title: "SyMCoM-Syntactic Measure of Code Mixing",
            authors: "Kodali Prashant",
            lab: "LTRC, Precog",
            advisor: "Manish Shrivastava, Ponnurangam Kumaraguru",
            forum: "ACL",
            level: "A*",
          },
          {
            title:
              "Inverse-Flow: Parallel Backpropagation for Inverse of a Convolution",
            authors: "Sandeep Kumar",
            lab: "C-STAR, ML Lab",
            advisor: "Prof Girish Varma",
            forum: "AISTATS'25",
            level: "A*",
          },
        ],
      },
      {
        time: "19:00 - 19:30",
        event: "Research Session 7",
        bgcolor: pink2Dark,
        lightcolor: pink2Light,
        papers: [
          {
            title:
              "A Systematic Exploration of Linguistic Phenomena in Spoken Hindi",
            authors: "Aadya Ranjan",
            lab: "LTRC",
            advisor: "Rajakrishnan Rajkumar",
            forum: "ICNLP",
            level: "A",
          },
        ],
      },
    ],
  },
];

function day(content) {
  let val = content[content.length - 1];

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h6" component="h3" style={{ margin: "0px 0" }}>
        {conference_schedule[val - 1].date}
      </Typography>

      {conference_schedule[val - 1].events.map((event, index) => (
        <div style={{ marginBottom: "5px" }}>
          <Table style={{ border: "1.5px solid rgb(166, 167, 169, 0.5) " }}>
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
                <TableCell></TableCell>
                <TableCell
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    backgroundColor: event.lightcolor,
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
                    <TableCell></TableCell>
                    <TableCell style={{ backgroundColor: event.lightcolor }}>
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
          </Table>
        </div>
      ))}
    </div>
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
    <div>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        style={{ margin: "20px 0" }}
      >
        <DayButton day="Day 1" dayVal={dayVal} setDayVal={setDayVal} />
        <DayButton day="Day 2" dayVal={dayVal} setDayVal={setDayVal} />
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
        alignContent: "center",
        alignItems: "center",
        padding: "40px",
        width: "100%",
      }}
    >
      <div
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
      </div>
    </Typography>
  );
}

export default page;
