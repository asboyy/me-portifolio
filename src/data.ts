import { Skill, Project, ContactChannel } from "./types";

// Informasi personal utama
export const PERSONAL_INFO = {
  name: "Fahmi",
  fullName: "Fahmi",
  title: "Software Engineering Student",
  subtitle:
    "Hi, I'm Fahmi. A passionate Software Engineering student building digital experiences.",
  avatarUrl: "/images/profile.jpeg",
  aboutText:
    "I am a software engineering student focusing on front-end development and UI/UX design. I love creating functional and aesthetically pleasing web and mobile applications. My expertise lies in bridging the gap between design and development, ensuring user-centric solutions.",
};

// Daftar keahlian yang dimiliki dengan warna lencana bergaya Neo-Brutalis
export const SKILLS: Skill[] = [
  {
    name: "Flutter",
    iconName: "Smartphone",
    color: "bg-[#02569B]", // Warna biru Flutter
    category: "Mobile",
  },
  {
    name: "Figma",
    iconName: "Figma",
    color: "bg-[#F24E1E]", // Warna oranye-merah Figma
    category: "Design",
  },

  {
    name: "TypeScript",
    iconName: "FileCode2",
    color: "bg-[#3178C6]", // Warna biru TS
    category: "Language",
  },
  {
    name: "CSS",
    iconName: "Layers",
    color: "bg-[#1572B6]", // Warna biru CSS
    category: "Design",
  },
  {
    name: "HTML",
    iconName: "Code2",
    color: "bg-[#E34F26]", // Warna oranye HTML
    category: "Web",
  },
  {
    name: "Node.js",
    iconName: "Server",
    color: "bg-[#339933]", // Warna hijau Node
    category: "Backend",
  },
  {
    name: "Git",
    iconName: "GitBranch",
    color: "bg-[#F05032]", // Warna oranye-merah Git
    category: "Tools",
  },
];

// Daftar proyek-proyek teknik yang dikerjakan beserta rincian tantangan dan solusi
export const PROJECTS: Project[] = [
  {
    id: "Portal-Akademi",
    title: "Portal Akademi",
    category: "Mobile App Design & Dev",
    description:
      "a mobile portal app for an educational institution, designed to streamline student access to academic resources and services.",
    imageUrl: "/images/project_ecommerce_1784563972824.jpg",
    tags: ["Flutter", "Figma", "Riverpod", "Clean Architecture"],
    githubUrl: "https://github.com/asboyy/Portal-Akademi-",
    details: {
      problem:
        "Traditional mobile e-commerce apps suffer from high drop-off rates during checkout due to multi-step friction and cluttered interfaces.",
      solution:
        "Redesigned the app with a single-page drawer checkout, collapsible card components, and spring-based Micro-interactions to make shopping fluid.",
      features: [
        "Gesture-controlled swipe to add to cart",
        "Interactive 3D-like card payments container",
        "Fast checkouts with smart address completions",
        "Personalized product recommendation feeds based on user interest",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "BLoC Pattern",
        "Figma Design",
        "PHP Backend",
      ],
    },
  },
  {
    id: "smart-task-manager",
    title: "Smart Task Manager",
    category: "Web App Development",
    description:
      "An intuitive daily planner with drag-and-drop task organizing, priority tagging, and offline-first client syncing.",
    imageUrl: "/images/project_task_app_1784563988516.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalForage"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    details: {
      problem:
        "Users often feel overwhelmed by giant to-do lists and fail to prioritize tasks that align with their active focus goals.",
      solution:
        "Created an elegant, neo-brutalist Kanban board featuring time-boxing, focus timers, and smart priority categorization.",
      features: [
        "Drag-and-drop boards using React DnD",
        "Pomodoro Timer with ambient sound synthesizer",
        "Daily productivity reports with interactive data graphs",
        "Robust offline sync utilizing LocalStorage and IndexedDB",
      ],
      techStack: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Lucide Icons",
      ],
    },
  },
  {
    id: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Fullstack Web App",
    description:
      "A high-performance SaaS monitoring dashboard with real-time user metrics, chart visualizations, and modular widgets.",
    imageUrl: "/images/project_dashboard_1784564006667.jpg",
    tags: ["React", "D3.js", "Express", "Node.js"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    details: {
      problem:
        "Many monitoring dashboards lack modularity, leading to high CPU load when updating high-frequency analytical data in real-time.",
      solution:
        "Engineered a low-latency, modular widget dashboard backed by a light-weight Node/Express server and optimized D3 renderings.",
      features: [
        "Interactive live user-traffic bar charts and charts",
        "Customizable drag-reorder widget layout",
        "Exportable PDF and CSV weekly performance audits",
        "Fast and light data fetches with optimal client memoization",
      ],
      techStack: ["React", "D3.js", "Express", "Tailwind CSS", "TypeScript"],
    },
  },
];

// Saluran kontak media sosial dan email pribadi
export const CONTACTS: ContactChannel[] = [
  {
    name: "GitHub",
    iconName: "Github",
    url: "https://github.com/asboyy",
    username: "Asboyy",
    color: "bg-[#24292e]",
  },
  {
    name: "LinkedIn",
    iconName: "Linkedin",
    url: "https://www.linkedin.com/in/muhammad-fahmi-714981265/",
    username: "Muhammad Fahmi",
    color: "bg-[#0077b5]",
  },
  {
    name: "Email",
    iconName: "Gmail",
    url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    username: "aamiikk01",
    color: "bg-[#ea4335]",
  },
  {
    name: "Instagram",
    iconName: "Instagram",
    url: "https://www.instagram.com/m.fahmisyhptr/",
    username: "@m.fahmisyhptr",
    color: "bg-[#e1306c]",
  },
  {
    name: "WhatsApp",
    iconName: "MessageCircle",
    url: "https://wa.me/6283190657857",
    username: "+62 831-9065-7857",
    color: "bg-[#25d366]",
  },
];
