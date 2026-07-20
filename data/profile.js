// Single source of truth for everything on the site.
// Edit this file to update your portfolio — no component changes needed.

export const profile = {
  name: "Ayush Debnath",
  shortName: "Ayush",
  role: "Dual Degree (B.Tech + M.Tech), Mechanical Engineering",
  institute: "IIT Kharagpur",
  tagline:
    "I work on making neural networks efficient and physically grounded — spiking networks for low-latency vision, neural operators for PDEs, and multimodal models for the field.",
  email: "ayush.d@kgpian.iitkgp.ac.in",
  // TODO: paste your full LinkedIn URL here
  linkedin: "https://www.linkedin.com/in/ayush-debnath/",
  github: "https://github.com/ayushdebnath012",
  // TODO: add if you want it shown; leave "" to hide the link
  scholar: "",
  // Drop a PDF at public/Ayush_Debnath_Resume.pdf to enable the résumé button
  resume: "/Ayush_Debnath_Resume.pdf",
  location: "Kharagpur, India",
};

export const researchInterests = [
  "Spiking Neural Networks",
  "Neural Operators & PINNs",
  "Efficient Inference",
  "Vision–Language Models",
  "Scientific Machine Learning",
  "Interpretability",
];

export const about = [
  `I'm a dual-degree student at IIT Kharagpur working across the boundary between machine learning and the physical sciences. Most of my research asks a version of the same question: how do we get neural networks to do more with less — less latency, less data, or less disregard for the physics of the problem?`,
  `Right now that means three threads in parallel: temporal encoding for spiking networks at Purdue, neural PDE solvers for elastic wave propagation at Stanford, and compositional structure in learned representations at CMU. My bachelor thesis takes the applied route — a vision–language pipeline for crop stress detection that has to survive contact with real farms.`,
];

export const education = [
  {
    program: "Dual Degree (B.Tech + M.Tech), Mechanical Engineering",
    institution: "Indian Institute of Technology Kharagpur",
    score: "CGPA 7.99 / 10",
    year: "Present",
  },
  {
    program: "All India Senior School Certificate Examination (Class XII)",
    institution: "South Point High School, Kolkata",
    score: "95.8%",
    year: "2021",
  },
  {
    program: "All India Secondary School Examination (Class X)",
    institution: "South Point High School, Kolkata",
    score: "97%",
    year: "2019",
  },
];

export const experience = [
  {
    title: "Research Intern",
    org: "Purdue University",
    advisor: "Prof. Sayeed Shafayet Chowdhury",
    dept: "Department of Computer Science",
    period: "Nov 2025 — Present",
    current: true,
    tags: ["Spiking Neural Networks", "PyTorch", "Efficient Inference"],
    points: [
      "Investigating Spiking Neural Networks (SNNs) with an emphasis on low-latency temporal encoding for vision tasks.",
      "Working on DCT-based encoding (DCT-SNN) to distribute spatial information over time and reduce inference latency.",
      "Exploring surrogate-gradient training for deep SNNs using leaky integrate-and-fire (LIF) neuron dynamics.",
      "Evaluating accuracy–latency trade-offs on standard image classification benchmarks for efficient inference systems.",
    ],
  },
  {
    title: "Research Intern",
    org: "Stanford University",
    advisor: "Prof. Tapan Mukerji",
    dept: "Department of Energy Resources Engineering",
    period: "Dec 2025 — Present",
    current: true,
    tags: ["PINNs", "Fourier Neural Operators", "Geophysics"],
    points: [
      "Developing Physics-Informed Neural Networks and Fourier Neural Operators for elastic wave modelling.",
      "Working on neural PDE solvers for elastic wave equations with embedded physical constraints and symmetries.",
      "Comparing learning-based solvers with classical numerical methods (FD/FEM) on accuracy and stability.",
      "Applying models to problems in computational geophysics and seismic simulation using a data-driven approach.",
    ],
  },
  {
    title: "Research Intern",
    org: "Carnegie Mellon University",
    advisor: "Prof. Zico Kolter",
    dept: "School of Computer Science",
    period: "Oct 2025 — Present",
    current: true,
    tags: ["Compositional Structure", "Interpretability", "Generative Models"],
    points: [
      "Studying additive and compositional structure in machine learning models, inspired by recent theoretical work.",
      "Working on structured representations using SVG-like abstractions for learning and generative modelling tasks.",
      "Analyzing interactions between symbolic structure and continuous representations in modern ML systems.",
      "Contributing to exploratory research connecting geometry, program structure, and interpretability methods.",
    ],
  },
  {
    title: "Bachelor Thesis Project — I",
    org: "IIT Kharagpur",
    advisor: "Prof. Sudip Misra",
    dept: "Department of Computer Science and Engineering",
    period: "Ongoing",
    current: true,
    tags: ["VLM", "LLM", "Flutter", "Firebase"],
    points: [
      "Designing a multimodal pipeline using Vision–Language and Large Language Models for crop stress detection.",
      "Using VLMs to extract semantic visual cues from crop images — leaf discoloration, texture, disease indicators.",
      "Integrating an LLM reasoning layer to combine visual outputs with contextual metadata and generate diagnoses.",
      "Building a Flutter application with a Firebase backend for real-time image upload and natural-language feedback.",
    ],
  },
  {
    title: "Computer Vision Intern",
    org: "Indian Institute of Science, Bangalore",
    advisor: "Prof. S. N. Omkar",
    dept: "Aerospace Engineering Department",
    period: "Dec 2024 — Apr 2025",
    current: false,
    tags: ["Optical Flow", "YOLOv11", "ResNet50", "GANs"],
    points: [
      "Implemented optical flow (Lucas–Kanade), YOLOv11, and MediaPipe for motion tracking and analysis.",
      "Designed and implemented a novel motion-capture (MoCap) model from scratch using PyTorch, ResNet50 and CNNs.",
      "Analyzed a dataset of over 20,000 images to extract keypoints in 3D human poses with six degrees of freedom.",
      "Used generative models (GANs) to synthesize training images, reaching 0.80 accuracy on the augmented set.",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    org: "IIT Roorkee",
    advisor: "Prof. Sudip Roy",
    dept: "Computer Science and Engineering Department",
    period: "May 2024 — Jul 2024",
    current: false,
    tags: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    points: [
      "Created a dynamic website using HTML, CSS, JavaScript, React.js and Material-UI.",
      "Implemented backend functionality with Node.js, Express.js and MongoDB for data management.",
      "Added role-based login and a file storage system; deployed using AWS and Docker.",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "IIT Delhi",
    advisor: "Prof. Shaurya Shriyam",
    dept: "Mechanical Engineering Department",
    period: "Jan 2024 — Apr 2024",
    current: false,
    tags: ["ANN", "Trajectory Prediction", "LSTM"],
    points: [
      "Developed an ANN-based model using displacement and direction changes for pedestrian trajectory prediction.",
      "Improved trajectory accuracy through parameter tuning on 14,861 unidirectional and 9,673 bidirectional samples.",
      "Analyzed Social-LSTM, Social GAN and SR-LSTM, integrating insights to enhance spatiotemporal accuracy.",
    ],
  },
];

export const projects = [
  {
    title: "Product Embeddings for Search Optimization",
    blurb:
      "Scraped and embedded 14k Amazon products across 5 categories, then benchmarked embedding models with a contrastive scoring metric.",
    tags: ["BERT", "t-SNE", "BeautifulSoup4", "TensorFlow"],
    points: [
      "Scraped 14k products across 5 categories from Amazon using BeautifulSoup4.",
      "Plotted quantitative distributions in box plots after removing IQR outliers.",
      "Used the TensorFlow Embedding Projector for 3D PCA and t-SNE visualizations of the word embeddings.",
      "Developed a contrastive metric on which BERT outperformed Skip-Gram and GloVe by 10–15%.",
    ],
  },
  {
    title: "Airline Delay Prediction",
    blurb:
      "Delay forecasting over 3M flight records, paired with a genetic algorithm that reschedules flights to minimize propagated delay.",
    tags: ["XGBoost", "CNN-LSTM", "Genetic Algorithms", "AWS EC2"],
    points: [
      "Used XGBoost, ANN, LSTM and CNN-LSTM for delay prediction with temporal and categorical features.",
      "Applied Pearson correlation, Kruskal–Wallis H-test, z-score, label encoding and IQR pruning on 3M records.",
      "Implemented a genetic algorithm for flight rescheduling using selection, crossover and mutation.",
      "Pulled data via API on AWS EC2 and added real-time weather with OpenCage; engineered season, traffic and time-of-day features.",
    ],
  },
  {
    title: "AI Conversation Chatbot",
    blurb:
      "An HR chatbot that reads sentiment from employee conversations and automates well-being reporting.",
    tags: ["FastAPI", "PostgreSQL", "Transformers", "Next.js"],
    points: [
      "Developed an AI-powered HR chatbot using FastAPI, PostgreSQL and Hugging Face Transformers to analyze mood.",
      "Built a Next.js front-end with ShadCN UI for an interactive, intuitive experience.",
      "Optimized the backend around PostgreSQL for structured storage and efficient AI-powered querying.",
      "Automated sentiment-based reporting to HR, giving real-time insight into employee well-being.",
    ],
  },
  {
    title: "Mentorella — Mobile Application",
    blurb:
      "A Flutter app connecting JEE aspirants with mentors in real time, built on Firebase.",
    tags: ["Flutter", "Firebase", "Cloud Functions", "REST"],
    points: [
      "Contributed to Mentorella, a Flutter app enabling real-time mentor–mentee connections for JEE aspirants.",
      "Integrated Firebase Authentication, Cloud Firestore and FCM for login, NoSQL storage and push notifications.",
      "Developed session notification logic using Firestore queries, Cloud Functions and a custom REST API.",
      "Used Provider and GoRouter, and optimized Firestore streams for better performance and lower backend usage.",
    ],
  },
  {
    title: "Movie Platform",
    blurb:
      "A MERN movie discovery platform with vector and fuzzy search across title, plot and cast.",
    tags: ["MERN", "MongoDB Atlas", "Vector Search", "Tailwind"],
    points: [
      "Built a scalable, responsive UI using React and Tailwind CSS.",
      "Created the platform on the MERN stack with advanced language and genre filters.",
      "Implemented vision search using OpenAI's model and MongoDB Atlas vector search.",
      "Designed search by title, plot and cast using MongoDB fuzzy search, increasing search accuracy.",
    ],
  },
];

export const highlights = [
  {
    label: "Silver — Open IIT Data Analytics 2024",
    detail: "Led a team of 20 at the IIT Kharagpur inter-hall competition.",
  },
  {
    label: "Poster — CASML 2024, IISc Bangalore",
    detail:
      "Presented on Physics-Informed Neural Networks at the International Conference on Applied AI and Scientific Machine Learning, with a pre-conference workshop.",
  },
  {
    label: "JEE Advanced 2022 — AIR 4708",
    detail: "Among 250,000+ Mains-qualified candidates.",
  },
  {
    label: "JEE Mains 2022 — 99.1 percentile",
    detail: "Top 1% among over 1,000,000 candidates nationally.",
  },
  {
    label: "WBJEE 2022 — Rank 318",
    detail: "Among 100,000 candidates in the state joint examination.",
  },
  {
    label: "Atmadeep Young Scholars Award 2018",
    detail: "Awarded by The Times of India; ranked among the top 20 students in the state.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "C++", "C", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "ML & Data",
    items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Transformers", "TensorFlow"],
  },
  {
    group: "Web & Backend",
    items: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Jupyter", "MATLAB", "COMSOL", "SolidWorks"],
  },
];

export const coursework = [
  {
    group: "Computer Science",
    items: [
      "Programming and Data Structures",
      "Algorithms",
      "Computer Organization & Architecture",
      "Computer Networks",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
  {
    group: "Machine Learning",
    items: [
      "AI Foundations and Applications",
      "Linear Algebra",
      "Soft Computing",
      "Robotics",
    ],
  },
  {
    group: "Mathematics",
    items: [
      "Advanced Calculus",
      "Partial Differential Equations",
      "Transform Calculus",
      "Theory of Computation",
    ],
  },
  {
    group: "MOOCs",
    items: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks",
      "Structuring ML Projects",
      "Building LLMs",
    ],
  },
];

export const responsibility = [
  {
    title: "Secretary, Sports and Games",
    org: "Hall of Residence, IIT Kharagpur",
    period: "Nov 2023 — Jun 2024",
    points: [
      "Worked with the hall council to organize and manage sports events within the hostel.",
      "Managed a training budget, expanding the range of sports activities in the hall.",
    ],
  },
];
