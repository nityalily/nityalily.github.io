export const profile = {
  name: "Nitya Patel",
  program: "Computer Engineering B.S @ University of Maryland, College Park",
  state: "Based in Maryland",
  tagline: "Systems and Software Engineer",
  email: "nityalily@gmail.com",
  linkedin: "https://linkedin.com/in/nityalily",
  github: "https://github.com/nityalily",
  resume: "/resume.pdf",
};

export const extracurriculars = [
  {
    title: "Engineering Honors",
    note: "Selective honors program within the Clark School of Engineering.",
  },
  {
    title: "Orientation ClarkLEADER",
    note: "Peer leader at the first-year orientation for incoming engineering students.",
  },
  {
    title: "Society of Women in Engineering",
    note: "Member supporting women in engineering through community and professional development.",
  },
  {
    title: "Engineering Career Services Peer Assistant",
    note: "Help students with resume reviews, job search strategies, and career advice, and help lead career workshops and events.",
  },
  {
    title: "Dean's List",
    note: "Recognized for academic excellence, 2025, 2026.",
  },
  {
    title: "Deloitte Case Competition",
    note: "Finalist, 2025.",
  },
];

export const experience = [
  {
    company: "Lockheed Martin",
    role: "Systems and Software Engineering Intern",
    location: "Mount Laurel, NJ",
    dates: "June 2026 – Present",
    summary:
      "C3 Software team under the Rotary and Mission Systems (RMS) department. Working in Java and C/C++ on defense systems.",
  },
  {
    company: "Optimoz Inc.",
    role: "Software Engineering Intern",
    location: "Rockville, MD",
    dates: "June 2025 – Aug 2025",
    summary:
      "Built a React Native voice-memo recorder with AI transcription and LLM-powered SOAP notes, backed by a FHIR-compliant Dockerized backend.",
  },
];

type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "figma" | "appstore";
};

type ProjectMedia = {
  type: "image" | "video";
  src: string;
};

type Project = {
  name: string;
  role: string;
  dates: string;
  summary: string;
  tags: string[];
  links?: ProjectLink[];
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    name: "TestuGo",
    role: "UI/UX Lead — Vertically Integrated Project (VIP) @ UMD",
    dates: "Jan 2025 – Present",
    summary:
      "Led sprint planning and cross-team coordination while building 20+ Kotlin/Compose and Swift interfaces with ArcGIS geofencing, shipped to the Apple and Play Store.",
    tags: ["Kotlin", "Swift", "ArcGIS", "Compose", "iOS", "Android"],
    links: [
      {
        label: "Design",
        href: "https://figma.com/design/Wdi2M4xVYF2RpZ7MOSfE34/TestuGo-2.0?node-id=0-1",
        type: "figma",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/testugo/id6745102681",
        type: "appstore",
      },
    ],
  },
  {
    name: "Weapon Watch App",
    role: "xFoundry Competition 2025",
    dates: "Aug 2024 – Sept 2025",
    summary:
      "Built a real-time weapon detection and alerting system for K–12 schools using Python, machine learning, and React Native; placed 1st in sales pitch and 3rd in business plan, finaled at the Nexplore 2040 Summit.",
    tags: ["Python", "Machine Learning", "React Native", "Firebase"],
    links: [
      {
        label: "Design",
        href: "https://www.figma.com/design/Nfbz2wCleAJJdD7WW4pb6J/Weapon-Watch?node-id=0-1&p=f",
        type: "figma",
      },
      {
        label: "App Repo",
        href: "https://github.com/gracelcai/weapon-watch-app",
        type: "github",
      },
      {
        label: "Cameras Repo",
        href: "https://github.com/JoeyLee-22/weapon-watch-cameras",
        type: "github",
      },
    ],
    media: [
      { type: "image", src: "/projects/weapon-watch/xfoundry1.jpg" },
      { type: "image", src: "/projects/weapon-watch/xfoundry2.jpg" },
    ],
  },
  {
    name: "Over Terrain Vehicle",
    role: "Engineering Design @ UMD",
    dates: "Aug 2023 – Dec 2023",
    summary:
      "Designed and built an embedded C/C++ Arduino vehicle with motor control, depth sensing, and conductivity probing, earning a nomination for Best Constructed Vehicle Award for innovative custom components. Placed top 10 of 80 teams.",
    tags: ["C/C++", "Arduino", "Embedded Systems", "CAD"],
    media: [
      { type: "video", src: "/projects/otv/otv1.mp4" },
      { type: "image", src: "/projects/otv/otv2.jpg" },
      { type: "image", src: "/projects/otv/otv3.jpeg" },
      { type: "image", src: "/projects/otv/otv4.jpeg" },
    ],
  },
];
