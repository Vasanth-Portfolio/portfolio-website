import WebImage1 from "../images/web-project-1.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
import MobileImage3 from "../images/expense-tracker.png";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

export interface ProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description?: string;
  ProjectHeader?: ProjectHeader;
  githubUrl?: string;
  demoUrl?: string;
  technologies?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Todo Application",
    category: "Web Application",
    img: WebImage1,
    description: "A comprehensive productivity application with AI-powered task management",
    githubUrl: "https://github.com/Vasanth-Portfolio/todo-pro",
    demoUrl: "https://vasanth.website/productivitypro",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
    ProjectHeader: {
      title: "Productivity Pro - Todo List",
      publishDate: "Mar 15, 2025",
      tags: "Full Stack / Productivity App",
    },
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Application",
    img: MobileImage2,
    description: "Full-featured e-commerce platform with AR product previews",
    githubUrl: "https://github.com/Vasanth-Portfolio/ecommerce-platform",
    demoUrl: "https://vasanth.website/shopsphere",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    ProjectHeader: {
      title: "ShopSphere E-Commerce",
      publishDate: "Jan 20, 2025",
      tags: "Full Stack / E-Commerce",
    },
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "Web Application",
    img: MobileImage3,
    description: "Personal finance application with budgeting and analytics",
    githubUrl: "https://github.com/Vasanth-Portfolio/expense-tracker",
    demoUrl: "https://vasanth.website/moneymind",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    ProjectHeader: {
      title: "MoneyMind Expense Tracker",
      publishDate: "Apr 10, 2025",
      tags: "Full Stack / Finance App",
    },
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: UIImage2,
    description: "UI/UX design for a cloud storage service with file management",
    githubUrl: "https://github.com/Vasanth-Portfolio/cloud-storage-ui",
    demoUrl: "https://vasanth.website/cloudvault",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    ProjectHeader: {
      title: "CloudVault Storage Platform",
      publishDate: "Dec 5, 2024",
      tags: "UI/UX Design / Cloud Storage",
    },
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Mobile Application",
    img: MobileImage1,
    description: "Social networking application built with React Native",
    githubUrl: "https://github.com/Vasanth-Portfolio/social-app",
    demoUrl: "https://vasanth.website/connect",
    technologies: ["React Native", "Firebase", "Redux"],
    ProjectHeader: {
      title: "Connect Social App",
      publishDate: "Nov 15, 2024",
      tags: "Mobile / Social Network",
    },
  },
  {
    id: 6,
    title: "Design System",
    category: "UI/UX Design",
    img: UIImage1,
    description: "Comprehensive design system for web applications",
    githubUrl: "https://github.com/Vasanth-Portfolio/design-system",
    demoUrl: "https://vasanth.website/nebula",
    technologies: ["React", "Storybook", "Styled Components"],
    ProjectHeader: {
      title: "Nebula Design System",
      publishDate: "Oct 30, 2024",
      tags: "UI Components / Design System",
    },
  },
];

export function getProjectById(id: number): Project | undefined {
  return projectsData.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
}