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
    title: "Merkensoft Wholesale Platform",
    category: "Web Application",
    img: WebImage1,
    description: "Scalable B2B wholesale platform with role-based access, inventory management, and RESTful API integration built using React and Ruby on Rails.",
    demoUrl: "https://app-dev.merkensoft.com",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "REST API"],
    ProjectHeader: {
      title: "Merkensoft — B2B Wholesale Platform",
      publishDate: "Jan 2025",
      tags: "Full Stack / B2B / React + Rails",
    },
  },
  {
    id: 2,
    title: "VendorLine — PlanetBids",
    category: "Web Application",
    img: MobileImage1,
    description: "Vendor management module for the PlanetBids procurement platform, featuring vendor onboarding, workflow automation, and seamless integrations.",
    demoUrl: "https://vendorline.dev.preprod.planetbids.com",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "REST API", "GitHub"],
    ProjectHeader: {
      title: "VendorLine — PlanetBids Platform",
      publishDate: "Sep 2024",
      tags: "Full Stack / Vendor Management / React + Rails",
    },
  },
  {
    id: 3,
    title: "Greenroom Theatrical Payroll",
    category: "Web Application",
    img: MobileImage2,
    description: "Specialized payroll processing platform for theatrical productions with multi-union management, diverse payment types, and compliance reporting.",
    demoUrl: "https://app.greenroom-dev.tabletoplabs.studio",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "REST API"],
    ProjectHeader: {
      title: "Greenroom — Theatrical Payroll Platform",
      publishDate: "May 2024",
      tags: "Full Stack / Payroll / React + Rails",
    },
  },
  {
    id: 4,
    title: "IRIS Design Studio",
    category: "Desktop Application",
    img: UIImage1,
    description: "Cross-platform desktop design app built with Electron, React, and TypeScript. Features AI-powered image upscaling (Real-ESRGAN), background removal, and 3D rendering via a Python FastAPI sidecar.",
    technologies: ["Electron", "React", "TypeScript", "Python", "FastAPI", "TensorFlow.js", "Three.js", "Redux Toolkit", "Tailwind CSS"],
    ProjectHeader: {
      title: "IRIS Design Studio — AI Desktop App",
      publishDate: "Mar 2025",
      tags: "Desktop App / AI / Electron + React + Python",
    },
  },
  {
    id: 5,
    title: "BI Platform API",
    category: "Backend / API",
    img: UIImage2,
    description: "Multi-tenant Business Intelligence backend built with FastAPI, PostgreSQL, and Redis. Includes AWS Cognito authentication, Celery background tasks, multi-tenant data isolation, and Docker deployment.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "AWS Cognito", "Docker", "Alembic", "SQLAlchemy"],
    ProjectHeader: {
      title: "BI Platform — Multi-Tenant Analytics API",
      publishDate: "Apr 2025",
      tags: "Backend / BI / FastAPI + PostgreSQL + AWS",
    },
  },
  {
    id: 6,
    title: "Merkensoft Platform",
    category: "Web Application",
    img: WebImage2,
    description: "Full platform suite for Merkensoft including wholesale marketplace, vendor management, and business intelligence — built as a unified multi-service product.",
    demoUrl: "https://app-dev.merkensoft.com",
    technologies: ["React", "Ruby on Rails", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
    ProjectHeader: {
      title: "Merkensoft — Full Platform Suite",
      publishDate: "2024–2025",
      tags: "Full Stack / Platform / React + Rails + Python",
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
