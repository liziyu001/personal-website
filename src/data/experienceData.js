const experienceData = [
  {
    id: 1,
    jobtitle: "Research Intern",
    companyname: "Reliable and Secure Systems Lab at Purdue",
    worktype: "Internship",
    duration: "May 2024 - Oct 2024",
    location: "West Lafayette, Indiana",
    responsibility: [
      `Developed an optimized snapshot/restore mechanism in C++ for llvm libfuzzer, utilizing Linux kernel's soft-dirty page tables to track memory changes efficiently, leading to a 40% increase in fuzzing throughput.`,
      `Implemented an IR-level LLVM pass to instrument the store of global variables, improving the ability to monitor and analyze program states for state-exploration algorithms.`,
      `Designed a Python script to automate the linkage of benchmark testing programs, reducing build time by 60%.`,
    ],
  },
  {
    id: 2,
    jobtitle: "Teaching Assistant",
    companyname: "Purdue University",
    worktype: "Part-time",
    duration: "Jan 2024 - May 2024",
    location: "West Lafayette, Indiana",
    responsibility: [
      `Served as a Teaching Assistant for Purdue's System Programming course, covering critical projects such as memory allocators, shell interpreters and web servers.`,
      `Provided hands-on assistance in problem-solving and programming techniques, emphasizing the use of GDB and the maintenance of good coding practices.`,
    ],
  },
  {
    id: 3,
    jobtitle: "Project Assistant",
    companyname:
      "Shanghai Minghua Electric Power Science & Techonology Co. Ltd.",
    worktype: "Internship",
    duration: "Jun 2023 - Aug 2023",
    location: "Huangpu District, Shanghai, China",
    responsibility: [
      `Developed a Digital Twin model using Python and MATLAB, achieving over 95% simulation accuracy, which enabled precise energy flow analysis and informed critical decision-making on component adjustments.`,
      `Created a power dispatch optimization system using genetic algorithms to dynamically adjust generator operations, resulting in a 20% reduction in power consumption.`,
      `Collaborated on the development of a power consumption prediction model using machine learning algorithms, which improved accuracy by 15% compared to previous models.`,
    ],
  },
  {
    id: 4,
    jobtitle: "Quantitative Developer",
    companyname: "Nipun Capital, L.P.",
    worktype: "Internship",
    duration: "May 2022 - Aug 2022",
    location: "Foster City, California",
    responsibility: [
      `Designed an automated Python script for scraping financial data from 14 distinct sources, subsequently storing the aggregated information in a Google Cloud database.`,
      `Migrated 50 production scripts to newer versions, as well as fixing legacy bugs and enhancing the codebase's overall compatibility.`,
      `Monitored, debugged, and optimized Airflow jobs, reducing task failures by 15% and improving execution time.`,
    ],
  },
];

const educationData = [
  {
    name: "Purdue University",
    status: "B.S. in dual majors: Computer Science/Data Science",
    year: "Aug 2021 - May 2025",
  },
];

const certificationData = [
  {
    name: "HTML and CSS in depth",
    source: "Meta",
    date: "Issued Sept 2022 · No Expiration Date",
  },
  {
    name: "Interactivity with JavaScript",
    source: "University of Michigan",
    date: "Issued Sept 2022 · No Expiration Date",
  },
  {
    name: "React Basics",
    source: "Meta",
    date: "Issued Sept 2022 · No Expiration Date",
  },
];

export { experienceData, educationData, certificationData };
