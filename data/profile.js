// Single source of truth for everything on the site.
// Edit this file to update your portfolio — no component changes needed.

export const profile = {
  name: "Ayush Debnath",
  shortName: "Ayush",
  role: "B.Tech (Hons.) Mechanical Engineering + M.Tech Manufacturing Science & Engineering",
  institute: "IIT Kharagpur",
  // Short line after the role in the hero — where you are right now.
  headline: "Research intern at CMU & Stanford",
  tagline:
    "I work on making neural networks efficient, physically grounded and trustworthy — benchmarking video world models for robotics, spiking networks for 3D perception, neural operators for PDEs, and multimodal models for clinical and field diagnosis.",
  email: "ayush.d@kgpian.iitkgp.ac.in",
  // TODO: paste your full LinkedIn URL here
  linkedin: "https://www.linkedin.com/in/ayush-debnath/",
  github: "https://github.com/ayushdebnath012",
  // TODO: add if you want it shown; leave "" to hide the link
  scholar: "",
  // The PDF at public/Ayush_Debnath_Resume.pdf enables the résumé button
  resume: "/Ayush_Debnath_Resume.pdf",
  location: "Kharagpur, India",
};

// The site is a static export, so there's no server to receive form posts.
// Applications are relayed to your inbox by Web3Forms.
//
//   1. Go to https://web3forms.com, enter ayush.d@kgpian.iitkgp.ac.in
//   2. They email you an access key — paste it below
//
// No account or password needed, and the free tier is unlimited. Until the
// key is set, the Apply button falls back to opening a pre-addressed email,
// so the board keeps working either way.
export const formConfig = {
  accessKey: "",
  endpoint: "https://api.web3forms.com/submit",
};

export const researchInterests = [
  "World Models & Robot Learning",
  "Spiking Neural Networks",
  "Neural Operators & PINNs",
  "Vision–Language Models",
  "Federated Learning",
  "Efficient Inference",
  "Scientific Machine Learning",
];

export const about = [
  `I'm a dual-degree student at IIT Kharagpur working across the boundary between machine learning and the physical sciences. Most of my research asks a version of the same question: how do we get neural networks to do more with less — less latency, less data, less private information leaving the device, or less disregard for the physics of the problem?`,
  `Right now that means evaluating video world models for robot learning at CMU's Robotics Institute, training-free SVG generation with diffusion and vision–language models in Zico Kolter's group, and neural PDE solvers for elastic wave propagation at Stanford. Earlier this year I built Adaptive Spiking PointNet at Purdue — an anytime 3D point-cloud classifier that decides for itself how many temporal slices it needs — and OmniMed-FL, a multimodal federated learning framework for clinical diagnosis, was accepted at IEEE GLOBECOM 2026. My bachelor thesis took the applied route: a vision–language pipeline for crop stress detection that had to survive contact with real farms.`,
];

export const education = [
  {
    program:
      "Dual Degree — B.Tech (Hons.) Mechanical Engineering + M.Tech Manufacturing Science & Engineering",
    institution: "Indian Institute of Technology Kharagpur",
    score: "CGPA 8.03 / 10",
    year: "2027",
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
    org: "Carnegie Mellon University",
    advisor: "Mosam Dabhi, PhD · Prof. Simon Lucey · Prof. László Jeni",
    dept: "Robotics Institute",
    period: "Jul 2026 — Present",
    current: true,
    tags: ["Video World Models", "Robot Learning", "VLA Models", "Benchmarking"],
    points: [
      "Running reproducible evaluations of video world models across WorldBench, WorldArena and Omni-WorldBench, identifying gaps in physical-state estimation, causal consistency and downstream-task performance.",
      "Building Python pipelines that validate benchmark data, compare model results, generate publication-ready figures and tables, and keep the analysis deterministic through automated tests.",
      "Designing evaluation protocols for state-aware robotic policies — benchmarking world models, vision-language-action models and diffusion policies across physical-reasoning and control tasks.",
    ],
  },
  {
    title: "Research Intern",
    org: "Purdue University",
    advisor: "Prof. Sayeed Shafayet Chowdhury",
    dept: "Department of Computer Science",
    period: "Nov 2025 — Aug 2026",
    current: false,
    tags: ["Spiking Neural Networks", "3D Point Clouds", "Anytime Inference", "PyTorch"],
    points: [
      "Developed Adaptive Spiking PointNet (ASP) for energy-efficient 3D point-cloud recognition on ModelNet40, built on LIF neurons and temporal spiking computation.",
      "Designed an active slice-selection mechanism for anytime inference that processes only 2.4 of 16 temporal slices on average while maintaining strong classification performance.",
      "Reached 89.10% on ModelNet40 and 93.28% on ModelNet10, outperforming fixed-order baselines at a 24.5% mean firing rate.",
      "Implemented surrogate-gradient training, cross-attention-based slice selection and firing-rate regularization to tune the accuracy–latency–energy trade-off.",
    ],
  },
  {
    title: "Research Intern",
    org: "Carnegie Mellon University",
    advisor: "Prof. Zico Kolter",
    dept: "School of Computer Science",
    period: "Oct 2025 — Present",
    current: true,
    tags: ["Diffusion Models", "Vision–Language Models", "Vector Graphics", "DiffVG"],
    points: [
      "Developed a training-free SVG generation and editing pipeline that uses pretrained diffusion models and frozen vision–language models to turn raster concepts into editable vector graphics.",
      "Designed the DiffuSVG workflow: diffusion handles image-space generation, then a VLM extracts shapes, colours, positions and z-order to emit compact SVG markup.",
      "Integrated CairoSVG, DiffVG, CLIP and DINO-based evaluation and refinement, enabling render–compare–refine iterations.",
      "Achieved 92% valid SVG generation at roughly 3.5 elements per SVG, and documented the limitations on complex shapes.",
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
      "Developing Physics-Informed Neural Networks (PINNs) and Fourier Neural Operators (FNOs) for elastic wave-propagation PDEs with governing physical constraints.",
      "Benchmarking learning-based PDE solvers against finite-difference and finite-element methods on accuracy, stability and physical consistency.",
      "Implemented physics-informed losses that combine governing-equation residuals with initial and boundary conditions to keep predictions physically valid.",
      "Investigating FNO-based operator learning as a fast surrogate for wave dynamics across varying initial and boundary conditions.",
    ],
  },
  {
    title: "Bachelor Thesis Project",
    org: "IIT Kharagpur",
    advisor: "Prof. Sudip Misra",
    dept: "Department of Computer Science and Engineering",
    period: "Apr 2025 — Jun 2026",
    current: false,
    tags: ["VLM", "LLM", "Flutter", "Firebase"],
    points: [
      "Developed a multimodal crop-diagnosis framework combining VLMs, LLMs and agronomic metadata for automated crop-stress and disease assessment.",
      "Designed a vision–language pipeline to extract semantic indicators — leaf discoloration, lesions, texture variations and other disease-related visual patterns.",
      "Integrated an LLM reasoning module that fuses visual evidence with contextual and sensor information into interpretable diagnoses and actionable recommendations.",
      "Built an end-to-end Flutter application on a Firebase backend for real-time image capture, inference and natural-language feedback.",
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
    title: "OmniMed-FL — Multimodal Federated Learning for Clinical Diagnosis",
    blurb:
      "Accepted at IEEE GLOBECOM 2026 (SAC E-Health). A federated framework that fuses medical imaging with clinical text while patient data stays decentralized.",
    tags: ["Federated Learning", "Multimodal", "Explainability", "Clinical AI"],
    link: { label: "Read the full write-up", href: "/publications#omnimed-fl" },
    points: [
      "Combines medical imaging and clinical text in a federated setup, so training never requires pooling patient data across sites.",
      "Achieves 0.956 Macro-F1 under non-IID settings — 99.1% of the centralized model's performance.",
      "Includes explainability and evidence retrieval so predictions can support, rather than replace, clinical decision-making.",
    ],
  },
  {
    title: "AI-Powered HR Chatbot — Open IIT OpenSoft 2025",
    blurb:
      "Silver medal. An HR assistant that monitors employee well-being from conversations, flags at-risk employees, and explains why.",
    tags: ["GPT-4", "DistilBERT", "SHAP", "Next.js", "FastAPI", "PostgreSQL"],
    points: [
      "Won Silver in Open IIT OpenSoft 2025 with a chatbot for employee engagement, well-being monitoring and personalised conversations.",
      "Integrated GPT-4 for dialogue, DistilBERT sentiment analysis and SHAP-based explainability to identify at-risk employees and generate context-aware HR interactions.",
      "Built the full stack on Next.js, FastAPI and PostgreSQL, with HR analytics dashboards, employee reports and automated workflows.",
    ],
  },
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

// Awards only — papers and conference presentations live in `publications`
// and `presentations` below and get their own page.
export const highlights = [
  {
    label: "Silver — Open IIT OpenSoft 2025",
    detail:
      "AI-powered HR chatbot for employee well-being monitoring, built with GPT-4, DistilBERT, SHAP, Next.js, FastAPI and PostgreSQL.",
  },
  {
    label: "JEE Advanced 2022 — AIR 4708",
    detail: "Among 250,000+ Mains-qualified candidates.",
  },
  {
    label: "JEE Main 2022 — 99.1 percentile",
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

// Papers. Each entry becomes a full card on /publications; `id` is the anchor
// (so /publications#omnimed-fl deep-links to it). Any link left "" is hidden.
export const publications = [
  {
    id: "omnimed-fl",
    title:
      "OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis",
    // TODO: paste the author list exactly as it appears on the paper
    authors: "",
    venue: "IEEE GLOBECOM 2026",
    venueLong: "IEEE Global Communications Conference",
    track: "Selected Areas in Communications — E-Health",
    date: "Dec 2026",
    status: "Accepted",
    tags: [
      "Federated Learning",
      "Multimodal Learning",
      "Medical Imaging",
      "Clinical NLP",
      "Explainability",
    ],
    summary: [
      `Clinical diagnosis rarely rests on one kind of evidence. A radiologist reads the scan alongside the referral note, the history and the labs, and a model that wants to do the same needs both imaging and text. Those records are also the most tightly guarded data a hospital holds, so pooling them across institutions to train one large model is usually off the table.`,
      `Federated learning offers a way around this: hospitals train a shared model collaboratively and only model updates ever leave a site, never a patient record. But most federated work in healthcare is single-modality, and real deployments are far from the tidy setting most methods assume — every site has a different patient mix, different scanners and different documentation habits, so the data across clients is strongly non-IID.`,
      `OmniMed-FL is a multimodal federated learning framework that combines medical imaging with clinical text for diagnosis while keeping every site's patient data decentralized, and that is built to be robust to exactly that heterogeneity. Under non-IID client splits it reaches a Macro-F1 of 0.956 — 99.1% of what a centralized model trained on the pooled data achieves — so the privacy constraint costs almost nothing in accuracy.`,
      `A diagnostic model is only useful if a clinician can check it. The framework therefore pairs each prediction with an explanation and retrieves the supporting evidence, so its output reads as a case for a diagnosis rather than a verdict — the form that clinical decision support actually needs.`,
    ],
    stats: [
      { value: "0.956", label: "Macro-F1 under non-IID client splits" },
      { value: "99.1%", label: "of centralized-model performance retained" },
      { value: "2", label: "modalities fused: imaging + clinical text" },
    ],
    contributions: [
      "A federated training framework that fuses medical imaging and clinical text for diagnosis without centralizing any patient data.",
      "Robustness to non-IID data across participating sites — the realistic case where each hospital's population, equipment and documentation differ.",
      "Explainability and evidence retrieval built into the pipeline, so predictions come with a rationale a clinician can inspect.",
    ],
    results: [
      "0.956 Macro-F1 under non-IID settings.",
      "99.1% of the performance of a centralized model trained on pooled data — a near-zero privacy penalty.",
      "Evaluated on combined imaging and clinical-text inputs, not a single modality.",
    ],
    // Paste URLs as they become available; each button appears only when set.
    links: { paper: "", code: "", slides: "", poster: "" },
  },
];

// Posters and talks. Shorter cards, same page.
export const presentations = [
  {
    id: "casml-2024",
    title: "Physics-Informed Neural Networks — research poster",
    type: "Poster",
    venue: "CASML 2024",
    venueLong:
      "International Conference on Applied AI and Scientific Machine Learning",
    location: "IISc Bangalore",
    date: "Dec 2024",
    tags: ["PINNs", "Scientific Machine Learning"],
    points: [
      "Presented a research poster on Physics-Informed Neural Networks — embedding governing physical equations into the training of neural networks for scientific and engineering problems.",
      "Attended the pre-conference workshop on Applied AI and Scientific Machine Learning, covering recent physics-informed and data-driven methods.",
      "The groundwork for the later neural-PDE-solver work on elastic wave propagation at Stanford.",
    ],
    links: { poster: "" },
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "C++", "C", "SQL", "JavaScript", "Dart", "HTML", "CSS"],
  },
  {
    group: "ML & Data",
    items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Transformers", "TensorFlow"],
  },
  {
    group: "Web & Backend",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Flutter",
      "Firebase",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Google Colab",
      "Jupyter",
      "MATLAB",
      "COMSOL",
      "SolidWorks",
    ],
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
    ],
  },
  {
    group: "Mathematics",
    items: [
      "Advanced Calculus",
      "Partial Differential Equations",
      "Transform Calculus",
      "Automata Theory",
    ],
  },
  {
    group: "MOOCs",
    items: [
      "Neural Networks and Deep Learning",
      "Computer Vision",
      "Physics-Informed Neural Networks",
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
      "Managed a ₹10,000 training budget, expanding the range of sports activities in the hall.",
    ],
  },
];
