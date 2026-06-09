import WebImage1 from "../images/web-project-1.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";

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
];

export function getProjectById(id: number): Project | undefined {
  return projectsData.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project =>
    project.category.toLowerCase() === category.toLowerCase()
  );
}
