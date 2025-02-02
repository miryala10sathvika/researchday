"use client";
import { React, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import { Box, Typography, Paper } from "@mui/material";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { purple } from "@mui/material/colors";

const orangeDark = "#dbb07f";
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
    "date": "February 8",
    "day": 1,
    "events": [
      {
        "time": "14:00 - 15:00",
        "event": "Research Session 1",
        "bgcolor": purpleDark,
        "lightcolor": purpleLight,
        "papers": [
          {
            "title": "Design and Optimization of Robust Process Monitors",
            "authors": "Shiva Sharma",
            "lab": "CVEST",
            "advisor": "Dr. Zia Abbas",
            "forum": "Midwest Symposium on Circuits and Systems (MWSCAS)",
            "level": "A"
          },
          {
            "title": "Test Case Generation for Requirements in Natural Language - An LLM Comparison Study",
            "authors": "Korraprolu Brahma Reddy",
            "lab": "SERC",
            "advisor": "Y. Raghu Reddy",
            "forum": "ISEC25",
            "level": "Others"
          },
          {
            "title": "FinderNet: A Data Augmentation Free Canonicalization aided Loop Detection and Closure technique",
            "authors": "Chavan Aneesh Samrat",
            "lab": "RRC",
            "advisor": "Madhava Krishna",
            "forum": "WACV",
            "level": "A"
          },
          {
            "title": "Open Vocabulary Keyword Spotting through Transfer Learning from Speech Synthesis",
            "authors": "Kesavaraj V",
            "lab": "LTRC",
            "advisor": "Anil Kumar Vuppala",
            "forum": "International Conference on Signal Processing and Communications",
            "level": "B"
          },
          {
            "title": "Minimalistic Video Saliency Prediction via Efficient Decoder & Spatio Temporal Action Cues",
            "authors": "Rohit Girmaji",
            "lab": "CVIT",
            "advisor": "Vineet Gandhi",
            "forum": "ICASSP 2025",
            "level": "A"
          }
        ]
      },
      {
        "time": "15:00 - 16:00",
        "event": "Research Session 2",
        "bgcolor": orangeDark,
        "lightcolor": orangeLight,
        "papers": [
          {
            "title": "Open-set 3D semantic instance maps for vision language navigation",
            "authors": "Laksh Nanwani",
            "lab": "RRC",
            "advisor": "K. Madhava Krishna",
            "forum": "Advanced Robotics",
            "level": "Others"
          },
          {
            "title": "Measuring Software Development Waste in Open-Source Software Projects",
            "authors": "Divij",
            "lab": "SERC",
            "advisor": "Y. Raghu Reddy",
            "forum": "SEAA",
            "level": "B"
          },
          {
            "title": "StethoSpeech: Speech Generation Through a Clinical Stethoscope Attached to the Skin",
            "authors": "Neilkumar Milankumar Shah",
            "lab": "CVIT",
            "advisor": "Vineet Gandhi",
            "forum": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
            "level": "A*"
          },
          {
            "title": "MICap: A Unified Model for Identity-aware Movie Descriptions",
            "authors": "Haran Raajesh",
            "lab": "CVIT",
            "advisor": "Makarand Tapaswi",
            "forum": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
            "level": "A*"
          }
        ]
      },
      {
        time: "16:00 - 16:45",
        event: "Writing Workshop",
        bgcolor: greenDark,
      },
      {
        time: "16:45 - 17:00",
        event: "Tea Break",
        bgcolor: blueDark,
      },
      {
        "time": "17:00 - 18:00",
        "event": "Research Session 3",
        "bgcolor": pink2Dark,
        "lightcolor": pink2Light,
        "papers": [
          {
            "title": "Towards Revolutionized Smart Grids: An AI-Driven Broker for Improved Operational Efficiency",
            "authors": "Chandlekar Sanjay Rajendrabhai",
            "lab": "MLL",
            "advisor": "Sujit Gujar",
            "forum": "International Joint Conference on Artificial Intelligence (IJCAI-24)",
            "level": "A*"
          },
          {
            "title": "Higher Order Structures for Graph Explanations",
            "authors": "Akshit Sinha",
            "lab": "Precog",
            "advisor": "Ponnurangam Kumaraguru",
            "forum": "AAAI Conference on Artificial Intelligence",
            "level": "A*"
          },
          {
            "title": "IDD-X: A Multi-View Dataset for Ego-relative Important Object Localization and Explanation in Dense and Unstructured Traffic",
            "authors": "Chirag Parikh",
            "lab": "CVIT",
            "advisor": "Ravi Kiran Sarvadevabhatla",
            "forum": "2024 IEEE International Conference on Robotics and Automation (ICRA)",
            "level": "A*"
          },
          {
            "title": "IRaga Space Visualization: Analyzing Melodic Structures in Carnatic and Hindustani Music",
            "authors": "Soham G Korade",
            "forum": "2024 IEEE International Conference on Robotics and Automation (ICRA)",
            "level": "A*"
          },
        ]
      },
      {
        "time": "18:00 - 19:00",
        "event": "Research Session 4",
        "bgcolor": greenDark,
        "lightcolor": greenLight,
        "papers": [
          {
            title: "Architecting Digital Twin for Smart City Systems: A Case Study",
            authors: "Kanigolla Naga Venkata Bala Likhith",

          },
          {
            "title": "DashCop: Automated E-Ticket Generation for Two-Wheeler Traffic Violations Using Dashcam Videos",
            "authors": "Deepti Rawat",
            "lab": "CVIT",
            "advisor": "Ravi Kiran Sarvadevabhatla",
            "forum": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
            "level": "A"
          },
          {
            "title": "Analyzing 6G Satellite IoT Architecture Using Stochastic Geometry: A Meta Distribution Approach",
            "authors": "B Naganjani",
            "lab": "SPCRC",
            "advisor": "Dr. Sachin Chaudhari",
            "forum": "IEEE Globecom Workshop",
            "level": "A*"
          },
          {
            "title": "Towards an ecologically valid naturalistic cognitive neuroscience of memory and event cognition",
            "authors": "R Pooja",

          },
          {
            "title": "A Systematic Exploration of Linguistic Phenomena in Spoken Hindi: Resource Creation and Hypothesis Testing",
            "authors": "Aadya Ranjan",
          },
          {
            "title": "A Portable and Flexible On-Road Sensing System for Traffic Monitoring",
            "authors": "Gajingam Naveen Kumar",
          }
        ]
      },
    ]
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
            title: "LineTR: Unified Text Line Segmentation for Challenging Palm Leaf Manuscripts",
            authors: "Amal Joseph"
          },
          {
            title: "SaGE: Evaluating Moral Consistency in Large Language Models",
            authors: "Vamshi Krishna Bonagiri",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru, Manas Gaur",
            forum: "LREC-COLING 2024",
            level: "A",
          },
          {
            title: "Prompt-to-Correct: Automated Test-Time Pronunciation Correction with Voice Prompts",
            authors: "Ayan Kashyap",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum: "ICASSP",
            level: "A",
          },
          {
            title: "NUMERICAL STUDY ON SEISMIC RESPONSE OF ROOF-TOP MOUNTED COOLING TOWER",
            authors: "Saranya S",
            lab: "EERC",
            advisor: "Dr. Sunitha Palissery",
            forum: "18th World Conference on Earthquake Engineering",
            level: "Others",
          },
        ],
      },
      {
        time: "12:00 - 13:00",
        event: "Research Session 2",
        bgcolor: orangeDark,
        lightcolor: orangeLight,
        papers: [
          {
            title: "Working Backwards: Mixed-Methods Approaches and the Challenge of a Fragmentary Migration Archive",
            authors: "Radheshyam Thiyagarajan",
            lab: "HSRC",
            advisor: "Nazia Akhtar",
            forum: "Spatial Methods for Urban Sustainability (SMUS Conference)",
            level: "NA",
          },
          {
            title: "Node Classification With Integrated Reject Option",
            authors: "Jayadratha Gayen",
            lab: "MLL",
            advisor: "Charu Sharma, Naresh Manwani",
            forum: "Deployable AI (DAI) Workshop at AAAI-2025",
            level: "Workshop",
          },
          {
            title: "Recursive Subproduct Codes with Reed-Muller-like Structure",
            authors: "Aditya Siddheshwar",
            lab: "SPCRC",
            advisor: "Prasad Krishnan",
            forum: "International Symposium on Information Theory",
            level: "B",
          },
          {
            title: "High-Performance Implementation of Louvain Algorithm with Representational Optimizations",
            authors: "Subhajit Sahu",
            lab: "CSTAR",
            advisor: "Kishore Kothapalli",
            forum: "COMPLEX NETWORKS 2024",
            level: "Below B",
          },
          {
            title: "A Knowledge-Driven Approach for Dynamic Reconfiguration of Control Design in Internet of Things and Cyber-Physical Systems",
            authors: "Amar Satyabroto Banerjee"
          }
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
            title: "Emergence of Text Semantics in CLIP Image Encoders",
            authors: "Sreeram Reddy Vennam"
          },
          {
            title: "Towards an Ecologically Valid Naturalistic Cognitive Neuroscience of Memory and Event Cognition",
            authors: "R Pooja",
            lab: "Cognitive science lab",
            advisor: "Vishnu Sreekumar",
            forum: "Neuropsychologia",
            level: "SJR (SCImago Journal Rank): 0.995, Quartile: Q1",
          },
          {
            title: "MetaCirc: A Meta-Learning Approach for Statistical Leakage Estimation Improvement in Digital Circuits",
            authors: "N V Raghavendra",
            lab: "CVEST",
            advisor: "Dr. Zia Abbas",
            forum: "IEEE ISCAS",
            level: "A*",
          },
          {
            title: "Public Blockchain-Envisioned Security Scheme Using Post Quantum Lattice-Based Aggregate Signature for Internet of Drones Applications",
            authors: "Prithwi Bagchi",
            lab: "SERC",
          },
          {
            title: "CSUM: A Novel Mechanism for Updating CubeSat while Preserving Authenticity and Integrity",
            authors: "Aashish Paliwal"
          }
        ],
      },
      {
        time: "15:00 - 16:00",
        event: "Panel Discussion",
        bgcolor: purpleDark,
      },
      {
        time: "16:00 - 16:30",
        event: "Tea Break",
        bgcolor: blueDark,
      },
      {
        time: "16:30 - 17:00",
        event: "Research Session 4",
        bgcolor: greenDark,
        lightcolor: greenLight,
        papers: [
          {
            title: "Towards Infusing Auxiliary Knowledge for Distracted Driver Detection",
            authors: "Ishwar B Balappanawar",
          },
          {
            title: "LLMs for Generation of Architectural Components: An Exploratory Empirical Study in the Serverless World",
            authors: "Shrikara A",
          },
          {
            title: "Time-Series based Fall Detection in Two-Wheelers",
            authors: "Arihant Jain",
            lab: "CSG",
            advisor: "Dr. Deepak Gangadharan",
            forum: "2023 IEEE 98th Vehicular Technology Conference",
            level: "B",
          },
        ],
      },
      {
        time: "17:00 - 18:00",
        event: "Research Session 5",
        bgcolor: beige,
        lightcolor: beigeLight,
        papers: [
          {
            title: "Equilibrium Point Selection and Two Stage Optimal Control of Quadrotor under Actuator Failure",
            authors: "Vidya C S",
          },
          {
            title: "LLM Vocabulary Compression for Low-Compute Environments",
            authors: "Anish R Joishy",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "Compression Workshop @ Neurips",
            level: "Workshop",
          },
          {
            title: "POSEIDON : Efficient Function Placement at the Edge using Deep Reinforcement Learning",
            authors: "Divyansh Pandey",
            lab: "SERC",
            advisor: "Karthik Vaidhyanathan",
            forum: "International Conference on Service Oriented Computing (ICSOC)",
            level: "A",
          },
          {
            title: "Can LLMs Generate Architectural Design Decisions? - An Exploratory Empirical study",
            authors: "Rudra Dhar",
          },
          {
            title: "Does Content Effect in LLMs Point to Genuine Reasoning?",
            authors: "Karthik Prasanna N"
          }
        ],
      },
      {
        time: "18:00 - 19:00",
        event: "Research Session 6",
        bgcolor: purpleLight,
        lightcolor: purpleDark,
        papers: [
          {
            title: "Inverse-Flow: Parallel Backpropagation for Inverse of a Convolution with Application to Normalizing Flows",
            authors: "Sandeep Kumar"
          },
          {
            title: "Automatically Assessing Software Architecture Compliance with Green Software Patterns",
            authors: "Srinivasan R"
          },
          {
            title: "Adaptive Control of Quadrotor under Actuator Loss and Unknown State-dependent Dynamics",
            authors: "Amitabh Sharma",
            lab: "RRC",
            advisor: "Spandan Roy",
            forum: "International Conference on Automation Science and Engineering",
            level: "Others",
          },
          {
            title: "ACMGVR: Architecturally Consistent Mazes for Games in Virtual Reality",
            authors: "Puru Ojha",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "ACM CHIPLAY",
            level: "A",
          },
          {
            title: "COMPUTATIONAL FRAMEWORK FOR FAILURE ANALYSIS OF FUNICULAR STRUCTURES",
            authors: "Kanukuntla Raj Kumar"
          },
          {
            title: "Enhancing Accuracy in Indic Handwritten Text Recognition",
            authors: "Evani Lalitha"
          },
          {
            title: "InSaAF: Incorporating Safety Through Accuracy and Fairness - Are LLMs Ready for the Indian Legal Domain?",
            authors: "Raghav Donakanti"
          }
        ],
      },
    ],
  }
  
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
