import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
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
    githubUrl: "https://github.com/yourrepo/todo-pro",
    demoUrl: "https://demo.productivitypro.app",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
    ProjectHeader: {
      title: "Productivity Pro - Todo List",
      publishDate: "Mar 15, 2025",
      tags: "Full Stack / Productivity App",
    },
  },
  {
    id: 2,
    title: "Phoenix Digital Agency",
    category: "Mobile Application",
    img: MobileImage2,
    description: "Mobile app for a digital agency showcasing their portfolio and services",
    githubUrl: "https://github.com/yourrepo/phoenix-app",
    demoUrl: "https://demo.phoenixagency.app",
    technologies: ["React Native", "Firebase", "TypeScript"],
    ProjectHeader: {
      title: "Phoenix Digital Agency App",
      publishDate: "Feb 10, 2025",
      tags: "Mobile / Agency Portfolio",
    },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Application",
    img: WebImage2,
    description: "Full-featured e-commerce platform with AR product previews",
    githubUrl: "https://github.com/yourrepo/ecommerce-platform",
    demoUrl: "https://demo.shopsphere.app",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    ProjectHeader: {
      title: "ShopSphere E-Commerce",
      publishDate: "Jan 20, 2025",
      tags: "Full Stack / E-Commerce",
    },
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: UIImage2,
    description: "UI/UX design for a cloud storage service with file management",
    githubUrl: "https://github.com/yourrepo/cloud-storage-ui",
    demoUrl: "https://figma.com/file/yourdesign",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    ProjectHeader: {
      title: "CloudVault Storage Platform",
      publishDate: "Dec 5, 2024",
      tags: "UI/UX Design / Cloud Storage",
    },
  },
  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application",
    img: MobileImage1,
    description: "Social networking application built with React Native",
    githubUrl: "https://github.com/yourrepo/social-app",
    demoUrl: "https://demo.socialapp.com",
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
    category: "Web Application",
    img: UIImage1,
    description: "Comprehensive design system for web applications",
    githubUrl: "https://github.com/yourrepo/design-system",
    demoUrl: "https://storybook.yourdesignsystem.com",
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