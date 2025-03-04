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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S1/D1-S1-P1-Shiva_Sharma.pptx?d=wccf2b80af77a476eb501d0fcab902556&csf=1&web=1&e=DbcAj5",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S1/D1-S1-P2-LLMcomparision_ResearchFest.pptx?d=wf2da54e4951f4414b5dfcbbc8ec82d85&csf=1&web=1&e=VJ8Zbx",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S1/Rohit_Girmaji_ResearchFest.pptx?d=w4f55f645ddd24accbafc6629ac71b807&csf=1&web=1&e=ZHt2wG",
          },
          {
            title:
              "Why should only High-Resource-Languages have all the fun? Pivot Based Evaluation in Low Resource Setting",
            authors: "Ananya Mukherjee",
            author_rollno: 2018801009,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S1/D1-S1-P5-AnanyaMukherjee_ResearchFest.pdf?csf=1&web=1&e=71oKBx",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S1/Ayan-Prompt-to-Correct2.pptx?d=wba7768f50a564614a447d6a7778c02c6&csf=1&web=1&e=6Qx02O",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S2/D1-S2-P2-Divij_SDW.pptx?d=w90c8769432cc43eca6db939a1a0c01b1&csf=1&web=1&e=oyAEJc",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:u:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S2/D1-S2-P3-Neil_StethoSpeech.key?csf=1&web=1&e=DPK6t7",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S2/D1-S2-P5-Aneesh_FinderNet.pdf?csf=1&web=1&e=dX0GsX",
          },
        ],
      },
      {
        time: "16:00 - 16:45",
        event: "Writing Workshop",
        bgcolor: greenDark,
        participants:
          'By Dr. Vishnu Sreekumar. Reference material: <a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005619" style="color: blue">https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005619</a>. Slides: <a href="https://iiitaphyd-my.sharepoint.com/:p:/g/personal/researchfest_iiit_ac_in/EdPsvCgDLIZOpQInxFGMlOoBSMaFizKBt2WnMPXB4xlXZQ?e=3ODjs2" style="color: blue">OneDrive Link</a>',
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S3/D1-S3-P1-IJCAIDC2024_Session3_Sanjay_Chandlekar.pptx?d=wbf158b1d1d754061a67ff8077dc9fa48&csf=1&web=1&e=LowPDz",
          },
          {
            title: "Higher Order Structures for Graph Explanations",
            authors: "Akshit Sinha",
            lab: "Precog",
            advisor: "Ponnurangam Kumaraguru",
            forum: "AAAI Conference on Artificial Intelligence",
            level: "A*",
            author_rollno: 2021101109,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S3/D1-S3-P2-Akshit.pdf?csf=1&web=1&e=ZR9GwZ",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:u:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S3/D1-S3-P3-Chirag_Parikh.url?csf=1&web=1&e=G8eJAC",
          },
          {
            title:
              "Raga Space Visualization: Analyzing Melodic Structures in Carnatic and Hindustani Music",
            authors: "Soham G Korade",
            forum:
              "2024 IEEE International Conference on Robotics and Automation (ICRA)",
            level: "A*",
            author_rollno: 2021101131,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S3/D1-S3-P4%20Soham%20Korade.pdf?csf=1&web=1&e=PG3LGi",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P1-Kanigolla%20Naga%20Venkata%20Bala%20Likhith.pptx?d=w8667c34bc22f4cec9fbc29178f5f449d&csf=1&web=1&e=EkB1F5",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P2-Deepti_DashCop.pptx?d=w70cbbd00138e4ce1b9c6f1e92190f4d6&csf=1&web=1&e=ubgwhE",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P3-Naganjani.pdf?csf=1&web=1&e=no4Rme",
          },
          {
            title:
              "A Knowledge-Driven Approach for Dynamic Reconfiguration of Control Design in Internet of Things and Cyber-Physical Systems",
            authors: "Amar Satyabroto Banerjee",
            author_rollno: 2018801016,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P4-Amar_Banerjee-Knowledge-Driven-Control-Capability-Composition.pptx?d=w96bf102733ea4fdba2b9aabe9740c216&csf=1&web=1&e=KOwiwR",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P5-Pooja%20and%20PrithaD1-S4-P5-Pooja%20and%20Pritha.pptx?d=w71e461b18188480f892d6ec099fb2e47&csf=1&web=1&e=RA82uj",
          },
          {
            title:
              "A Systematic Exploration of Linguistic Phenomena in Spoken Hindi: Resource Creation and Hypothesis Testing",
            authors: "Aadya Ranjan",
            author_rollno: 2023814001,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/D1-S4-P6-icon_research_anonymous.pdf?csf=1&web=1&e=YdIcCb",
          },
          {
            title:
              "Representation Surgery: Theory and Practice of Affine Steering",
            authors: "Shashwat Singh",
            author_rollno: 2020114016,
            slides: "https://iiitaphyd-my.sharepoint.com/:u:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D1-S4/slides.com.url?csf=1&web=1&e=5zaEcp",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S1/D2-S1-P1-FINAL%20-%20AmalJoseph%20-%20LineTR.pdf?csf=1&web=1&e=E646Um",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S1/D2-S1-P2-Coling%20Presentation%20Slides_anonymous.pdf?csf=1&web=1&e=KC7vec,"
          },
          {
            title:
              "InSaAF: Incorporating Safety Through Accuracy and Fairness - Are LLMs Ready for the Indian Legal Domain?",
            authors: "Raghav Donakanti",
            author_rollno: 2021101024,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S1/D2-S1-P3-Insaaf.pdf?csf=1&web=1&e=nbaKTK",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S1/D2-S1-P4-S.Saranya_2021810001_ResearchFest_anonymous.pptx?d=w042435bc4bed492e9ba87c1c85028a75&csf=1&web=1&e=ERuivh",
          },
          {
            title:
              "Working Backwards: Mixed-Methods Approaches and the Challenge of a Fragmentary Migration Archive",
            authors: "Radheshyam Thiyagarajan",
            lab: "HSRC",
            advisor: "Nazia Akhtar",
            forum: "Spatial Methods for Urban Sustainability (SMUS Conference)",
            level: "NA",
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S1/D2-S1-P5-Radheshyam_ResearchFest2025.pptx?d=w69c51e27fd014cf2b0cb161169b9198b&csf=1&web=1&e=kKKgHM",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S2/D2-S2-P1-Jayadratha-NCwR.pptx?d=wd3754e7d03b04d2188eeb7432f0e8993&csf=1&web=1&e=05E5Tt",
          },
          {
            title: "Recursive Subproduct Codes with Reed-Muller-like Structure",
            authors: "Aditya Siddheshwar",
            lab: "SPCRC",
            advisor: "Prasad Krishnan",
            forum: "International Symposium on Information Theory",
            level: "B",
            author_rollno: 2022702018,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S2/D2-S2-P2-aditya_siddheshwar_RSP_codes_anonymous.pdf?csf=1&web=1&e=E2FmIx",
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
            title: "Towards Rational Consensus in Honest Majority",
            authors: "Varul Srivastava",
            author_rollno: 2019111015,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S2/D2-S2-P4-_IIITH_Research_Week_RationalConsensus.pdf?csf=1&web=1&e=esKwfx"
          },
          {
            title:
              "Can LLMs Generate Architectural Design Decisions? - An Exploratory Empirical study",
            authors: "Rudra Dhar",
            author_rollno: 2022801002,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S2/D2-S2-P5-ResearchFest_RudraDhar.pptx?d=w6fd7c826fa5347fab7f1c3e6d9544bdb&csf=1&web=1&e=uqNJiV",
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
        moderators: "Aaryan",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S3/D2-S3-P1-MetaCirc_anonymous.pptx?d=w73079c4ca7514153b982a87dd45ed3ba&csf=1&web=1&e=c78r5O",
          },
          {
            title:
              "Towards Architecting Sustainable MLOps: A Self-Adaptation Approach",
            authors: "Hiya Bhatt",
            author_rollno: 2024701001,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S3/D2-S3-P2-Sustainable%20MLOps%20Presentation-3.pdf?csf=1&web=1&e=csTqVC",
          },
          {
            title: "Emergence of Text Semantics in CLIP Image Encoders",
            authors: "Sreeram Reddy Vennam",
            author_rollno: 2021101045,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S3/D2-S3-P3-Sreeram_Vennam.pdf?csf=1&web=1&e=73170b",
          },
          {
            title:
              "Public Blockchain-Envisioned Security Scheme Using Post Quantum Lattice-Based Aggregate Signature for Internet of Drones Applications",
            authors: "Prithwi Bagchi",
            lab: "SERC",
            author_rollno: 2020801014,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S3/D2-S3-P4-Research_Fest_Prit.pdf?csf=1&web=1&e=4mPnw4",
          },
          {
            title:
              "CSUM: A Novel Mechanism for Updating CubeSat while Preserving Authenticity and Integrity",
            authors: "Aashish Paliwal",
            author_rollno: 2022801018,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S3/D2-S3-P5-Aashish.pdf?csf=1&web=1&e=cTsgbX",
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
        time: "16:30 - 17:30",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S4/D2-S4-P1-Towards%20Infusing%20Auxiliary%20Knowledge%20for%20Distracted%20Driver%20Detection.pdf?csf=1&web=1&e=F0tdh3",
          },
          {
            title: "Time-Series based Fall Detection in Two-Wheelers",
            authors: "Arihant Jain",
            lab: "CSG",
            advisor: "Dr. Deepak Gangadharan",
            forum: "2023 IEEE 98th Vehicular Technology Conference",
            level: "B",
            author_rollno: 2021112018,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S4/D2-S4-P2-Arihant_anonymous.pptx?d=w883f026a2e444979b4e4062cc07082c9&csf=1&web=1&e=CoMIj7",
          },
          {
            title:
              "LLMs for Generation of Architectural Components: An Exploratory Empirical Study in the Serverless World",
            authors: "Shrikara A",
            author_rollno: 2021101058,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S4/D2-S4-P3-Shrikara.pdf?csf=1&web=1&e=uDnyXv",
          },
          {
            title: "LLM Vocabulary Compression for Low-Compute Environments",
            authors: "Anish R Joishy",
            lab: "Precog",
            advisor: "Prof. Ponnurangam Kumaraguru",
            forum: "Compression Workshop @ Neurips",
            level: "Workshop",
            author_rollno: 2022111014,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S4/D2-S4-P4-IIIT%20Hyderabad_anonymous.pdf?csf=1&web=1&e=TuABQH",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S4/D2-S4-P5-Poseidon%20(3).pdf?csf=1&web=1&e=dfeME9",
          },
        ],
      },
      {
        time: "17:30 - 18:30",
        event: "Research Session 5",
        bgcolor: beige,
        lightcolor: beigeLight,
        moderators: "Hiya Bhatt",
        papers: [
          {
            title:
              "Equilibrium Point Selection and Two Stage Optimal Control of Quadrotor under Actuator Failure",
            authors: "Vidya C S",
            author_rollno: 2022702002,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S5/D2-S5-P1-2022702002_anonymous.pptx?d=w33389e17f8b34f8ebfa5e384a5e03036&csf=1&web=1&e=D2jJ8f",
          },
          {
            title: "EditIQ: Automated Cinematic Editing of Static Wide-Angle Videos via Dialogue Interpretation and Saliency Cues",
            authors: "Bhav Beri",
            author_rollno: 2021111013,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S5/D2-S5-P2-New%20EditIQ%20Video%20Presentation.pptx?d=wf222c66208534cafb1356250bc64afcb&csf=1&web=1&e=gib6WN",
          },
          {
            title: "Does Content Effect in LLMs Point to Genuine Reasoning?",
            authors: "Karthik Prasanna N",
            author_rollno: 2020115007,
            slides: "https://iiitaphyd-my.sharepoint.com/:b:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P6-BEWARE%20Presentation%201%201.pdf?csf=1&web=1&e=xVbmJG",
          },
          {
            title:
              "Automatically Assessing Software Architecture Compliance with Green Software Patterns",
            authors: "Srinivasan R",
            author_rollno: 2024900020,
            slides: "https://iiitaphyd-my.sharepoint.com/:f:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S5?csf=1&web=1&e=CxTJzc",
          },
          {
            title:
              "Inverse-Flow: Parallel Backpropagation for Inverse of a Convolution with Application to Normalizing Flows",
            authors: "Sandeep Kumar",
            author_rollno: 2018701015,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S5/D2-S5-P4-Inverse_Flow_anonymous.pptx?d=wf33e81cec4964f168b49bbd5e17dc56f&csf=1&web=1&e=dTZgkl",
          },
          {
            title:
              "COMPUTATIONAL FRAMEWORK FOR FAILURE ANALYSIS OF FUNICULAR STRUCTURES",
            authors: "Kanukuntla Raj Kumar",
            author_rollno: 2023810001,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S5/D2-S5-P5-RAJKUMAR_K_IIIT_HYD_RF_anonymous.pptx?d=wa5d056792fcc4784a9a13cf300e5e04b&csf=1&web=1&e=QsIes1",
          },
        ],
      },
      {
        time: "18:30 - 19:30",
        event: "Research Session 6",
        bgcolor: purpleLight,
        lightcolor: purpleDark,
        moderators: "Lokesh V",
        papers: [
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P1-Research_Fest.pptx?d=w33d5f82acdca498a9923136cae87befe&csf=1&web=1&e=BU47ij",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P2-ACMGVR%20Puru%20Ojha.pptx?d=w155f2722d5c94b5da00db0f262369e7f&csf=1&web=1&e=FYuTcY",
          },

          {
            title: "Enhancing Accuracy in Indic Handwritten Text Recognition",
            authors: "Evani Lalitha",
            author_rollno: 2024701023,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P3-Evani_Lalitha-2024701023_anonymous.pptx?d=wc6b717c4446344f7a0ace3c7b415e5f7&csf=1&web=1&e=72V7ps",
          },
          {
            title:
              "Objectifying Gaze: an empirical study with non-sexualized images",
            authors: "Ayushi Agarwal",
            author_rollno: 2020801007,
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P4-ResearchFest_CSS2024.pptx?d=wa9b90682a7fa40129fe8d35b7e5ed5ab&csf=1&web=1&e=mpEiBL",
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
            slides: "https://iiitaphyd-my.sharepoint.com/:p:/r/personal/researchfest_iiit_ac_in/Documents/ResearchFest2025-Slides/D2-S6/D2-S6-P5-Haran_MICap.pptx?d=w1c6e523b0ed042b99580ee51db6e5d1c&csf=1&web=1&e=1CRqXo",
          },
        ],
      },
    ],
  },
];
