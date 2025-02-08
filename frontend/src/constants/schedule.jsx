const orangeDark = "#dbb07f";
const orangeLight = "#ffdbb3";
const blueDark = "#7AB2D3";
const blueLight = "#B9E5E8";
const beige = "#E6DDC4";
const beigeLight = "#f5efdf";
const pink2Dark = "#E195AB";
const pink2Light = "#FFCCE1";
const greenDark = "#91AC8F";
const greenLight = "#b6d1b4";
const purpleDark = "#bf97cf";
const purpleLight = "#ddb9eb";

export const conference_schedule = [
  {
    date: "February 8",
    day: 1,
    events: [
      {
        time: "13:00 - 14:00",
        event: "Registration Desk Open",
        bgcolor: blueLight,
      },
      {
        time: "14:00 - 15:00",
        event: "Research Session 1",
        bgcolor: purpleDark,
        lightcolor: purpleLight,
        moderators: "Furqan",
        papers: [
          {
            title: "Design and Optimization of Robust Process Monitors",
            authors: "Shiva Sharma",
            lab: "CVEST",
            advisor: "Dr. Zia Abbas",
            forum: "Midwest Symposium on Circuits and Systems (MWSCAS)",
            level: "A",
            author_rollno: 2022702013,
          },
          {
            title:
              "Test Case Generation for Requirements in Natural Language - An LLM Comparison Study",
            authors: "Korraprolu Brahma Reddy",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "ISEC25",
            level: "Others",
            author_rollno: 2022900007,
          },
          // {
          //   title:
          //     "Open Vocabulary Keyword Spotting through Transfer Learning from Speech Synthesis",
          //   authors: "Kesavaraj V",
          //   lab: "LTRC",
          //   advisor: "Anil Kumar Vuppala",
          //   forum:
          //     "International Conference on Signal Processing and Communications",
          //   level: "B",
          //   author_rollno: 2022701008,
          // },
          {
            title:
              "Minimalistic Video Saliency Prediction via Efficient Decoder & Spatio Temporal Action Cues",
            authors: "Rohit Girmaji",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum: "ICASSP 2025",
            level: "A",
            author_rollno: 2021900013,
          },
        ],
      },
      {
        time: "15:00 - 16:00",
        event: "Research Session 2",
        bgcolor: orangeDark,
        lightcolor: orangeLight,
        moderators: "Furqan",
        papers: [
          {
            title:
              "Open-set 3D semantic instance maps for vision language navigation",
            authors: "Laksh Nanwani",
            lab: "RRC",
            advisor: "K. Madhava Krishna",
            forum: "Advanced Robotics",
            level: "Others",
            author_rollno: 2021701002,
          },
          {
            title:
              "Prompt-to-Correct: Automated Test-Time Pronunciation Correction with Voice Prompts",
            authors: "Ayan Kashyap",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum: "ICASSP",
            level: "A",
            author_rollno: 2024701010,
          },
          {
            title:
              "Measuring Software Development Waste in Open-Source Software Projects",
            authors: "Divij",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "SEAA",
            level: "B",
            author_rollno: 2020900015,
          },
          {
            title:
              "StethoSpeech: Speech Generation Through a Clinical Stethoscope Attached to the Skin",
            authors: "Neilkumar Milankumar Shah",
            lab: "CVIT",
            advisor: "Vineet Gandhi",
            forum:
              "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
            level: "A*",
            author_rollno: 2022801009,
          },
          {
            title:
              "FinderNet: A Data Augmentation Free Canonicalization aided Loop Detection and Closure technique",
            authors: "Chavan Aneesh Samrat",
            lab: "RRC",
            advisor: "Madhava Krishna",
            forum: "WACV",
            level: "A",
            author_rollno: 2020111018,
          },
        ],
      },
      {
        time: "16:00 - 16:45",
        event: "Writing Workshop",
        bgcolor: greenDark,
        participants:
          'By Dr. Vishnu Sreekumar. Reference material: <a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005619" style="color: blue">https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005619</a>',
      },
      {
        time: "16:45 - 17:15",
        event: "Tea Break",
        bgcolor: blueDark,
      },
      {
        time: "17:15 - 18:00",
        event: "Research Session 3",
        bgcolor: pink2Dark,
        lightcolor: pink2Light,
        moderators: "Vidya",
        papers: [
          {
            title:
              "Towards Revolutionized Smart Grids: An AI-Driven Broker for Improved Operational Efficiency",
            authors: "Chandlekar Sanjay Rajendrabhai",
            lab: "MLL",
            advisor: "Sujit Gujar",
            forum:
              "International Joint Conference on Artificial Intelligence (IJCAI-24)",
            level: "A*",
            author_rollno: 2020701017,
          },
          {
            title: "Higher Order Structures for Graph Explanations",
            authors: "Akshit Sinha",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru",
            forum: "AAAI Conference on Artificial Intelligence",
            level: "A*",
            author_rollno: 2021101109,
          },
          {
            title:
              "IDD-X: A Multi-View Dataset for Ego-relative Important Object Localization and Explanation in Dense and Unstructured Traffic",
            authors: "Chirag Parikh",
            lab: "CVIT",
            advisor: "Ravi Kiran Sarvadevabhatla",
            forum:
              "2024 IEEE International Conference on Robotics and Automation (ICRA)",
            level: "A*",
            author_rollno: 2022900005,
          },
          {
            title:
              "Raga Space Visualization: Analyzing Melodic Structures in Carnatic and Hindustani Music",
            authors: "Soham G Korade",
            forum:
              "2024 IEEE International Conference on Robotics and Automation (ICRA)",
            level: "A*",
            author_rollno: 2021101131,
          },
        ],
      },
      {
        time: "18:00 - 19:00",
        event: "Research Session 4",
        bgcolor: greenDark,
        lightcolor: greenLight,
        moderators: "Vidya",
        papers: [
          {
            title:
              "Architecting Digital Twin for Smart City Systems: A Case Study",
            authors: "Kanigolla Naga Venkata Bala Likhith",
            author_rollno: 2024701036,
          },
          {
            title:
              "DashCop: Automated E-Ticket Generation for Two-Wheeler Traffic Violations Using Dashcam Videos",
            authors: "Deepti Rawat",
            lab: "CVIT",
            advisor: "Ravi Kiran Sarvadevabhatla",
            forum:
              "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
            level: "A",
            author_rollno: 2022801016,
          },
          {
            title:
              "Analyzing 6G Satellite IoT Architecture Using Stochastic Geometry: A Meta Distribution Approach",
            authors: "B Naganjani",
            lab: "SPCRC",
            advisor: "Dr. Sachin Chaudhari",
            forum: "IEEE Globecom Workshop",
            level: "A*",
            author_rollno: 2022702003,
          },
          {
            title:
              "A Knowledge-Driven Approach for Dynamic Reconfiguration of Control Design in Internet of Things and Cyber-Physical Systems",
            authors: "Amar Satyabroto Banerjee",
            author_rollno: 2018801016,
          },
          {
            title:
              "Towards an Ecologically Valid Naturalistic Cognitive Neuroscience of Memory and Event Cognition",
            authors: "R Pooja",
            lab: "Cognitive science lab",
            advisor: "Vishnu Sreekumar",
            forum: "Neuropsychologia",
            level: "SJR (SCImago Journal Rank): 0.995, Quartile: Q1",
            author_rollno: 2022815001,
          },
          {
            title:
              "A Systematic Exploration of Linguistic Phenomena in Spoken Hindi: Resource Creation and Hypothesis Testing",
            authors: "Aadya Ranjan",
            author_rollno: 2023814001,
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
        time: "10:00 - 12:00",
        event: "Registration Desk Open",
        bgcolor: blueLight,
      },
      {
        time: "11:00 - 12:00",
        event: "Research Session 1",
        bgcolor: purpleDark,
        lightcolor: purpleLight,
        moderators: "Sudharshan",
        papers: [
          {
            title:
              "LineTR: Unified Text Line Segmentation for Challenging Palm Leaf Manuscripts",
            authors: "Amal Joseph",
            author_rollno: 2023801004,
          },
          {
            title:
              "SaGE: Evaluating Moral Consistency in Large Language Models",
            authors: "Vamshi Krishna Bonagiri",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru, Manas Gaur",
            forum: "LREC-COLING 2024",
            level: "A",
            author_rollno: 2020114011,
          },
          {
            title:
              "InSaAF: Incorporating Safety Through Accuracy and Fairness - Are LLMs Ready for the Indian Legal Domain?",
            authors: "Raghav Donakanti",
            author_rollno: 2021101024,
          },
          {
            title:
              "NUMERICAL STUDY ON SEISMIC RESPONSE OF ROOF-TOP MOUNTED COOLING TOWER",
            authors: "Saranya S",
            lab: "EERC",
            advisor: "Dr. Sunitha Palissery",
            forum: "18th World Conference on Earthquake Engineering",
            level: "Others",
            author_rollno: 2021810001,
          },
          {
            title:
              "Working Backwards: Mixed-Methods Approaches and the Challenge of a Fragmentary Migration Archive",
            authors: "Radheshyam Thiyagarajan",
            lab: "HSRC",
            advisor: "Nazia Akhtar",
            forum: "Spatial Methods for Urban Sustainability (SMUS Conference)",
            level: "NA",
            // author_rollno: 2020115009
          },
        ],
      },
      {
        time: "12:00 - 13:00",
        event: "Research Session 2",
        bgcolor: orangeDark,
        lightcolor: orangeLight,
        moderators: "Sudharshan",
        papers: [
          {
            title: "Node Classification With Integrated Reject Option",
            authors: "Jayadratha Gayen",
            lab: "MLL",
            advisor: "Charu Sharma, Naresh Manwani",
            forum: "Deployable AI (DAI) Workshop at AAAI-2025",
            level: "Workshop",
            author_rollno: 2022702012,
          },
          {
            title: "Recursive Subproduct Codes with Reed-Muller-like Structure",
            authors: "Aditya Siddheshwar",
            lab: "SPCRC",
            advisor: "Prasad Krishnan",
            forum: "International Symposium on Information Theory",
            level: "B",
            author_rollno: 2022702018,
          },
          {
            title:
              "High-Performance Implementation of Louvain Algorithm with Representational Optimizations",
            authors: "Subhajit Sahu",
            lab: "CSTAR",
            advisor: "Kishore Kothapalli",
            forum: "COMPLEX NETWORKS 2024",
            level: "Below B",
            author_rollno: 2018801013,
          },
          {
            title:
              "Can LLMs Generate Architectural Design Decisions? - An Exploratory Empirical study",
            authors: "Rudra Dhar",
            author_rollno: 2022801002,
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
        moderators: "Vidya",
        papers: [
          {
            title:
              "MetaCirc: A Meta-Learning Approach for Statistical Leakage Estimation Improvement in Digital Circuits",
            authors: "N V Raghavendra",
            lab: "CVEST",
            advisor: "Dr. Zia Abbas",
            forum: "IEEE ISCAS",
            level: "A*",
            author_rollno: 2022702010,
          },
          {
            title:
              "Towards Architecting Sustainable MLOps: A Self-Adaptation Approach",
            authors: "Hiya Bhatt",
            author_rollno: 2024701001,
          },
          {
            title: "Emergence of Text Semantics in CLIP Image Encoders",
            authors: "Sreeram Reddy Vennam",
            author_rollno: 2021101045,
          },
          {
            title:
              "Public Blockchain-Envisioned Security Scheme Using Post Quantum Lattice-Based Aggregate Signature for Internet of Drones Applications",
            authors: "Prithwi Bagchi",
            lab: "SERC",
            author_rollno: 2020801014,
          },
          {
            title:
              "CSUM: A Novel Mechanism for Updating CubeSat while Preserving Authenticity and Integrity",
            authors: "Aashish Paliwal",
            author_rollno: 2022801018,
          },
        ],
      },
      {
        time: "15:00 - 16:00",
        event:
          "Navigating the Research Odyssey: Insights from Early-Career Researchers",
        bgcolor: purpleDark,
        moderators: "PhD scholar Mr. Sudarshan Srinivasan",
        participants:
          "Panel Discussion with Dr. Karthik Vaidhyanathan, Dr. Isha Dubey, and Dr. Kshitij Gajjar.",
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
        moderators: "Aparajitha",
        papers: [
          {
            title:
              "Towards Infusing Auxiliary Knowledge for Distracted Driver Detection",
            authors: "Ishwar B Balappanawar",
            author_rollno: 2021101023,
          },
          {
            title: "Time-Series based Fall Detection in Two-Wheelers",
            authors: "Arihant Jain",
            lab: "CSG",
            advisor: "Dr. Deepak Gangadharan",
            forum: "2023 IEEE 98th Vehicular Technology Conference",
            level: "B",
            author_rollno: 2021112018,
          },
          {
            title:
              "LLMs for Generation of Architectural Components: An Exploratory Empirical Study in the Serverless World",
            authors: "Shrikara A",
            author_rollno: 2021101058,
          },
        ],
      },
      {
        time: "17:00 - 18:00",
        event: "Research Session 5",
        bgcolor: beige,
        lightcolor: beigeLight,
        moderators: "Aparajitha",
        papers: [
          {
            title: "LLM Vocabulary Compression for Low-Compute Environments",
            authors: "Anish R Joishy",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "Compression Workshop @ Neurips",
            level: "Workshop",
            author_rollno: 2022111014,
          },
          {
            title:
              "POSEIDON : Efficient Function Placement at the Edge using Deep Reinforcement Learning",
            authors: "Divyansh Pandey",
            lab: "SERC",
            advisor: "Karthik Vaidhyanathan",
            forum:
              "International Conference on Service Oriented Computing (ICSOC)",
            level: "A",
            author_rollno: 2022101111,
          },
          {
            title:
              "Equilibrium Point Selection and Two Stage Optimal Control of Quadrotor under Actuator Failure",
            authors: "Vidya C S",
            author_rollno: 2022702002,
          },
          {
            title: "Does Content Effect in LLMs Point to Genuine Reasoning?",
            authors: "Karthik Prasanna N",
            author_rollno: 2020115007,
          },
          {
            title:
              "Automatically Assessing Software Architecture Compliance with Green Software Patterns",
            authors: "Srinivasan R",
            author_rollno: 2024900020,
          },
        ],
      },
      {
        time: "18:00 - 19:00",
        event: "Research Session 6",
        bgcolor: purpleLight,
        lightcolor: purpleDark,
        moderators: "Aparajitha",
        papers: [
          {
            title:
              "Inverse-Flow: Parallel Backpropagation for Inverse of a Convolution with Application to Normalizing Flows",
            authors: "Sandeep Kumar",
            author_rollno: 2018701015,
          },
          {
            title:
              "COMPUTATIONAL FRAMEWORK FOR FAILURE ANALYSIS OF FUNICULAR STRUCTURES",
            authors: "Kanukuntla Raj Kumar",
            author_rollno: 2023810001,
          },
          {
            title:
              "Adaptive Control of Quadrotor under Actuator Loss and Unknown State-dependent Dynamics",
            authors: "Amitabh Sharma",
            lab: "RRC",
            advisor: "Spandan Roy",
            forum:
              "International Conference on Automation Science and Engineering",
            level: "Others",
            author_rollno: 2022702005,
          },
          {
            title:
              "ACMGVR: Architecturally Consistent Mazes for Games in Virtual Reality",
            authors: "Puru Ojha",
            lab: "SERC",
            advisor: "Y. Raghu Reddy",
            forum: "ACM CHIPLAY",
            level: "A",
            author_rollno: 2022701007,
          },

          {
            title: "Enhancing Accuracy in Indic Handwritten Text Recognition",
            authors: "Evani Lalitha",
            author_rollno: 2024701023,
          },
          {
            title:
              "Objectifying Gaze: an empirical study with non-sexualized images",
            authors: "Ayushi Agarwal",
            author_rollno: 2020801007,
          },
          {
            title:
              "MICap: A Unified Model for Identity-aware Movie Descriptions",
            authors: "Haran Raajesh",
            lab: "CVIT",
            advisor: "Makarand Tapaswi",
            forum:
              "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
            level: "A*",
            author_rollno: 2021101005,
          },
        ],
      },
    ],
  },
];
