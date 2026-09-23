export const portfolioData = {
  // Personal Info
  name: "Aniket Saxena",
  logoName: "Aniket",
  roleLine1: "Full Stack & AI Engineer",
  roleLine2: "ML & GenAI Developer",
  typedRoles: [
    "Full Stack & AI Engineer",
    "Software Engineer @ BEL",
    "Generative AI Specialist",
    "Tech Secretary @ MLSC TIET"
  ],
  location: "Delhi, India",
  heroSubtitle: "Hi! I'm Aniket Saxena — Computer Engineering",
  heroDescription: "Computer Engineering undergraduate passionate about building agentic AI systems, real-time microservices, RAG copilots, and scalable full-stack applications.",
  profileImage: "/assets/img/aniket-hero-nobg.png",
  circularBadgeText: "BUILD - TRAIN - DEPLOY - ",

  // Contact Details
  contact: {
    email: "aniket04ofc@gmail.com",
    phone: "+91-7065543300",
    location: "Delhi, India",
    mapsLink: "https://maps.google.com",
    footerTagline: "COLLABORATE WITH ANIKET SAXENA AND BUILD AGENTIC AI & SCALABLE SOFTWARE TODAY."
  },
  socials: {
    github: "https://github.com/Advin04",
    linkedin: "https://linkedin.com/in/aniket-saxena-a39b02223/",
    email: "mailto:aniket04ofc@gmail.com",
    mediaPortfolio: "https://mediaportfolio-aniket.vercel.app/"
  },

  // Education
  education: [
    {
      institution: "Thapar Institute of Engineering and Technology (TIET)",
      location: "Patiala, Punjab",
      degree: "Bachelor of Engineering in Computer Engineering",
      duration: "Aug 2023 – Present",
      grade: "CGPA: 8.25 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "System Design",
        "Software Engineering",
        "Full Stack Development"
      ]
    },
    {
      institution: "Parevartan School",
      location: "Ghaziabad",
      degree: "Senior Secondary Education (12th), CBSE - PCM",
      duration: "Apr 2020 – May 2022",
      grade: "90.6%"
    },
    {
      institution: "Delhi Public School Ghaziabad, Meerut Road",
      location: "Ghaziabad",
      degree: "Secondary Education (10th), CBSE",
      duration: "Apr 2019 – Mar 2020",
      grade: "88.4%"
    }
  ],

  // Experience
  experience: [
    {
      role: "Software Project Trainee",
      company: "Bharat Electronics Limited (BEL)",
      location: "Ghaziabad (On-site)",
      duration: "Jun 2026 – July 2026",
      highlights: [
        "Engineered a Radar Intelligence Portal featuring a Gemini-powered RAG AI Copilot querying PostgreSQL threat catalogs across 11+ radar profiles.",
        "Integrated full-stack microservices across React 18, Spring Boot 3, Flask & PostgreSQL using JWT REST APIs and WebSockets across 10+ threat nodes.",
        "Architected an ML & Physics engine using Scikit-Learn and SciPy Swerling-1 algorithms achieving <50ms ML latency and <200ms UI updates."
      ]
    },
    {
      role: "Technical Secretary",
      company: "Microsoft Learn Student Chapter (MLSC), TIET",
      location: "Patiala, Punjab",
      duration: "May 2025 – May 2026",
      highlights: [
        "Led technical operations and budgeting for 15+ events with 200+ participants.",
        "Mentored 25+ juniors and oversaw 8 software tools across the chapter."
      ]
    }
  ],

  // About Section
  aboutTitle: "Computer Engineering student specializing in <span>Generative AI</span>, <span>Full-Stack Microservices</span>, and <span>Machine Learning</span>.",
  aboutDescription: "Software Project Trainee at Bharat Electronics Limited (BEL) & Technical Secretary at MLSC TIET. I enjoy building agentic AI pipelines, real-time WebSockets telemetry, RAG copilots, and production-ready Web apps.",

  // Works / Projects
  projects: [
    {
      id: "01",
      title: "Radar Intelligence Portal & RAG Copilot",
      subtitle: "Bharat Electronics Limited (BEL)",
      description: "Engineered a Gemini-powered RAG AI Copilot & Radar Portal querying PostgreSQL threat catalogs across 11+ radar profiles with WebSockets telemetry and <50ms ML latency.",
      img: "/assets/img/work-img-4.png",
      demoLink: "#",
      githubLink: "https://github.com/Advin04",
      tags: ["React 18", "Spring Boot 3", "Flask", "PostgreSQL", "RAG AI", "WebSockets", "Scikit-Learn"]
    },
    {
      id: "02",
      title: "Perfect-CV (AI Resume Optimizer)",
      subtitle: "Agentic AI Platform",
      description: "Architected an AI Agent platform for resume optimization using Gemini & OpenRouter APIs, scaling custom scoring pipelines to serve 500+ active users with sub-2s execution.",
      img: "/assets/img/work-img-1.png",
      demoLink: "#",
      githubLink: "https://github.com/Advin04",
      tags: ["React", "Vite", "Express", "MongoDB", "Cloudinary", "Gemini AI", "OpenRouter"]
    },
    {
      id: "03",
      title: "Transformer-Based Sentiment Analyzer",
      subtitle: "NLP & Deep Learning Pipeline",
      description: "Optimized a DistilBERT classifier against RoBERTa and mBERT, utilizing AdamW & gradient accumulation to achieve 92% validation accuracy and 50% training loss reduction.",
      img: "/assets/img/work-img-2.png",
      demoLink: "#",
      githubLink: "https://github.com/Advin04",
      tags: ["Python", "PyTorch", "HuggingFace", "DistilBERT", "scikit-learn"]
    },
    {
      id: "04",
      title: "Autonomous Job-Tracking AI Agent",
      subtitle: "Zero-Touch Agentic Scheduler",
      description: "Engineered an intelligent AI agent utilizing NLP and OAuth 2.0 to ingest Gmail streams, classify job deadlines, and execute zero-touch Google Calendar scheduling.",
      img: "/assets/img/work-img-3.png",
      demoLink: "#",
      githubLink: "https://github.com/Advin04",
      tags: ["React.js", "Flask", "Google Calendar API", "Gmail API", "NLP", "OAuth 2.0"]
    }
  ],

  // Services / Core Competencies
  services: [
    {
      title: "Generative AI & Agentic Systems",
      description: "Building RAG AI copilots, LLM agent workflows, prompt engineering pipelines, and intelligent automated assistants.",
      items: ["RAG (Retrieval-Augmented Generation)", "OpenAI & Gemini API Integration", "Agentic Decision Pipelines"]
    },
    {
      title: "Full-Stack Microservices Architecture",
      description: "Developing scalable distributed web applications with Spring Boot, Node.js, Express, Flask, and React.",
      items: ["RESTful APIs & WebSockets Telemetry", "JWT & OAuth 2.0 Security", "Real-Time Systems"]
    },
    {
      title: "Machine Learning & NLP Pipelines",
      description: "Training, benchmarking, and serving production-ready transformer models and physics/statistical ML algorithms.",
      items: ["PyTorch & HuggingFace Transformers", "DistilBERT & Sentiment Analysis", "Scikit-Learn & SciPy"]
    },
    {
      title: "Database Engineering & Cloud",
      description: "Designing relational and document databases with optimized indexing, containerized deployments, and CI/CD.",
      items: ["PostgreSQL, MongoDB & MySQL", "Docker & Docker Compose", "Vercel & Cloud Deployment"]
    }
  ],

  // Technical Skills (Exact match with Resume)
  skills: [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: "/assets/img/skills-backend-1.svg" },
        { name: "Python", icon: "/assets/img/skills-frontend-3.svg" },
        { name: "C++", icon: "/assets/img/skills-frontend-3.svg" },
        { name: "JavaScript", icon: "/assets/img/skills-frontend-3.svg" },
        { name: "SQL", icon: "/assets/img/skills-backend-2.svg" },
        { name: "C", icon: "/assets/img/skills-frontend-1.svg" }
      ]
    },
    {
      title: "Backend & Frameworks",
      items: [
        { name: "Spring Boot", icon: "/assets/img/skills-backend-1.svg" },
        { name: "Node.js", icon: "/assets/img/skills-backend-3.svg" },
        { name: "Express", icon: "/assets/img/skills-backend-3.svg" },
        { name: "Flask", icon: "/assets/img/skills-backend-3.svg" },
        { name: "FastAPI", icon: "/assets/img/skills-backend-3.svg" },
        { name: "REST APIs", icon: "/assets/img/skills-backend-5.svg" },
        { name: "WebSockets", icon: "/assets/img/skills-backend-5.svg" }
      ]
    },
    {
      title: "Frontend & UI",
      items: [
        { name: "React", icon: "/assets/img/skills-frontend-4.svg" },
        { name: "Vite", icon: "/assets/img/skills-frontend-3.svg" },
        { name: "HTML5", icon: "/assets/img/skills-frontend-1.svg" },
        { name: "CSS3", icon: "/assets/img/skills-frontend-2.svg" }
      ]
    },
    {
      title: "Databases & Tools",
      items: [
        { name: "PostgreSQL", icon: "/assets/img/skills-backend-2.svg" },
        { name: "MongoDB", icon: "/assets/img/skills-backend-4.svg" },
        { name: "MySQL", icon: "/assets/img/skills-backend-2.svg" },
        { name: "Firebase", icon: "/assets/img/skills-backend-4.svg" },
        { name: "Docker", icon: "/assets/img/skills-backend-3.svg" },
        { name: "Git & GitHub", icon: "/assets/img/skills-frontend-7.svg" },
        { name: "Vercel", icon: "/assets/img/skills-frontend-7.svg" }
      ]
    },
    {
      title: "AI, ML & GenAI",
      items: [
        { name: "PyTorch", icon: "/assets/img/skills-design-1.svg" },
        { name: "HuggingFace", icon: "/assets/img/skills-design-2.svg" },
        { name: "scikit-learn", icon: "/assets/img/skills-design-3.svg" },
        { name: "RAG", icon: "/assets/img/skills-design-4.svg" },
        { name: "OpenAI API", icon: "/assets/img/skills-design-5.svg" },
        { name: "Gemini API", icon: "/assets/img/skills-design-6.svg" }
      ]
    }
  ],

  // Achievements & Certifications
  achievements: [
    {
      title: "Winner – Makeathon 6",
      year: "2024",
      description: "First place winner at Makeathon 6 hackathon."
    },
    {
      title: "Top 80 National Rank – BrainWars",
      year: "2026",
      description: "Secured Top 80 rank nationally in BrainWars competitive tech challenge."
    },
    {
      title: "Project Trainee Certification – Bharat Electronics Limited (BEL)",
      year: "Jun 2026 – Jul 2026",
      description: "Certified Software Project Trainee at BEL Ghaziabad for engineering Radar Intelligence Portal & RAG Copilot."
    }
  ],

  // Testimonials / Feedback
  testimonials: [
    {
      name: "BEL Project Lead",
      role: "Bharat Electronics Limited",
      img: "/assets/img/testimonial-1.png",
      rating: "5.0",
      text: "“Aniket engineered an outstanding Radar Intelligence Portal with RAG AI copilot capability. Exceptional speed with <50ms ML latency and top-tier microservice integration.”"
    },
    {
      name: "MLSC TIET Executive",
      role: "Microsoft Learn Student Chapter",
      img: "/assets/img/testimonial-2.png",
      rating: "5.0",
      text: "“As Technical Secretary, Aniket successfully managed 15+ major tech events for 200+ participants with flawless execution and great leadership.”"
    }
  ]
};
