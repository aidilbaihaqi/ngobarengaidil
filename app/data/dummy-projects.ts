import type { FeaturedItem, Project } from "@/app/types/project";

export const featuredProjects: FeaturedItem[] = [
  {
    id: "1",
    title: "AI-Powered Bioinformatics Platform",
    subtitle: "Revolutionizing genetic data analysis with machine learning",
    cover: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&h=1080&fit=crop",
    year: 2025,
    tags: ["AI/ML", "Bioinformatics", "Python"],
    metric: "Finalist - ITB Competition 2025",
    hrefLive: "#",
    hrefRepo: "https://github.com",
    accent: "purple",
  },
  {
    id: "2",
    title: "Smart City Dashboard",
    subtitle: "Real-time analytics for urban management",
    cover: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=1080&fit=crop",
    year: 2025,
    tags: ["Web Apps", "IoT", "React"],
    metric: "2,000+ active users",
    hrefLive: "#",
    hrefRepo: "https://github.com",
    accent: "cyan",
  },
  {
    id: "3",
    title: "Open Source Dev Tools",
    subtitle: "Productivity tools for modern developers",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop",
    year: 2024,
    tags: ["Open Source", "CLI", "TypeScript"],
    metric: "5K+ GitHub stars",
    hrefLive: "#",
    hrefRepo: "https://github.com",
    accent: "pink",
  },
];

export const allProjects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Bioinformatics Platform",
    blurb:
      "A comprehensive platform for analyzing genetic data using advanced machine learning algorithms",
    cover: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&h=1080&fit=crop",
    year: 2025,
    teamSize: 4,
    role: ["Full Stack Developer", "ML Engineer"],
    stack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    tags: ["AI/ML", "Research"],
    metrics: {
      users: 500,
      performance: "API latency −35%",
      awards: ["Finalist - ITB Competition 2025"],
    },
    links: {
      live: "https://bio-ai-platform.com",
      repo: "https://github.com/username/bio-ai",
      caseStudy: "#",
    },
    details: {
      problem:
        "Genetic data analysis is time-consuming and requires specialized expertise, limiting accessibility for researchers.",
      solution:
        "Built an AI-powered platform that automates complex genetic analysis workflows, reducing processing time by 70%.",
      contribution: [
        "Designed and implemented ML models for sequence analysis",
        "Built RESTful API with FastAPI",
        "Created interactive data visualization dashboard",
      ],
      highlights: [
        "Processed 10M+ genetic sequences",
        "Reduced analysis time from hours to minutes",
        "Finalist in ITB Bioinformatics Competition",
      ],
    },
  },
  {
    id: "2",
    title: "Smart City Dashboard",
    blurb:
      "Real-time monitoring and analytics platform for urban infrastructure management",
    cover: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=1080&fit=crop",
    year: 2025,
    teamSize: 6,
    role: ["Frontend Lead"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
    tags: ["Web Apps"],
    metrics: {
      users: 2000,
      uptime: "99.9%",
    },
    links: {
      live: "https://smartcity-dashboard.com",
      repo: "https://github.com/username/smart-city",
    },
    details: {
      problem:
        "City officials lack real-time visibility into infrastructure performance and citizen services.",
      solution:
        "Developed a comprehensive dashboard integrating IoT sensors, traffic data, and public services into a unified interface.",
      contribution: [
        "Led frontend architecture and component design",
        "Implemented real-time data visualization with D3.js",
        "Optimized performance for handling 100K+ data points",
      ],
    },
  },
  {
    id: "3",
    title: "Open Source Dev Tools",
    blurb: "A collection of CLI tools to boost developer productivity",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop",
    year: 2024,
    role: ["Creator", "Maintainer"],
    stack: ["TypeScript", "Node.js", "Commander.js"],
    tags: ["Open Source"],
    metrics: {
      users: 5000,
    },
    links: {
      repo: "https://github.com/username/devtools",
    },
    details: {
      problem:
        "Developers waste time on repetitive tasks like project scaffolding and code formatting.",
      solution:
        "Created a suite of CLI tools that automate common development workflows.",
      contribution: [
        "Built 10+ CLI commands for project automation",
        "Maintained active open source community",
        "Published to npm with 5K+ weekly downloads",
      ],
    },
  },
  {
    id: "4",
    title: "E-Commerce Platform",
    blurb: "Full-featured online marketplace with payment integration",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    year: 2024,
    teamSize: 5,
    role: ["Full Stack Developer"],
    stack: ["Laravel", "Vue.js", "MySQL", "Redis", "Stripe"],
    tags: ["Web Apps"],
    metrics: {
      users: 1500,
      uptime: "99.8%",
    },
    links: {
      live: "https://marketplace-demo.com",
    },
    details: {
      problem:
        "Small businesses need affordable e-commerce solutions with modern features.",
      solution:
        "Built a scalable marketplace platform with inventory management, payment processing, and analytics.",
      contribution: [
        "Implemented secure payment gateway integration",
        "Built admin dashboard for vendor management",
        "Optimized database queries for 50% faster load times",
      ],
    },
  },
  {
    id: "5",
    title: "AI Chatbot for Customer Service",
    blurb: "Intelligent chatbot powered by natural language processing",
    cover: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&h=1080&fit=crop",
    year: 2024,
    teamSize: 3,
    role: ["AI Engineer", "Backend Developer"],
    stack: ["Python", "OpenAI API", "FastAPI", "React", "MongoDB"],
    tags: ["AI/ML", "Web Apps"],
    metrics: {
      users: 800,
      performance: "Response time <2s",
    },
    links: {
      live: "https://chatbot-demo.com",
      repo: "https://github.com/username/ai-chatbot",
    },
    details: {
      problem:
        "Customer service teams are overwhelmed with repetitive inquiries.",
      solution:
        "Developed an AI chatbot that handles 80% of common customer queries automatically.",
      contribution: [
        "Integrated OpenAI GPT for natural conversations",
        "Built conversation flow management system",
        "Implemented analytics dashboard for insights",
      ],
    },
  },
  {
    id: "6",
    title: "Portfolio Design System",
    blurb: "Modern design system for personal portfolio websites",
    cover: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1920&h=1080&fit=crop",
    year: 2024,
    role: ["Designer", "Developer"],
    stack: ["React", "Tailwind CSS", "Framer Motion", "Storybook"],
    tags: ["Open Source", "Web Apps"],
    links: {
      live: "https://design-system-demo.com",
      repo: "https://github.com/username/portfolio-ds",
    },
    details: {
      problem: "Developers struggle to create visually appealing portfolios.",
      solution:
        "Created a comprehensive design system with pre-built components and animations.",
      contribution: [
        "Designed 50+ reusable components",
        "Documented usage with Storybook",
        "Published as npm package",
      ],
    },
  },
];
