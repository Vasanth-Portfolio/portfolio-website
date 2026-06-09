import Image1 from '../images/web-project-1.jpg';
import Image2 from '../images/mobile-project-1.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/ui-project-1.jpg';
import Image5 from '../images/ui-project-2.jpg';
import Image6 from '../images/web-project-2.jpg';
import { JSX, ReactElement } from 'react';

interface ProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

interface ProjectImage {
  id: number;
  title: string;
  img: string;
}

interface CompanyInfoItem {
  id: number;
  title: string;
  details: string;
}

interface Technology {
  title: string;
  techs: string[];
}

interface ProjectDetail {
  id: number;
  details: string;
}

interface SocialSharingItem {
  id: number;
  name: string;
  icon?: ReactElement | JSX.Element;
  url: string;
}

interface RelatedProjectItem {
  id: number;
  title: string;
  img: string;
}

interface ProjectInfo {
  ClientHeading: string;
  CompanyInfo: CompanyInfoItem[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: Technology[];
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetail[];
  SocialSharingHeading: string;
  SocialSharing: SocialSharingItem[];
}

interface RelatedProject {
  title: string;
  Projects: RelatedProjectItem[];
}

export interface SingleProjectData {
  id: number;
  ProjectHeader: ProjectHeader;
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
  RelatedProject: RelatedProject;
}

const merkensoft: SingleProjectData = {
  id: 1,
  ProjectHeader: {
    title: 'Merkensoft — B2B Wholesale Platform',
    publishDate: 'Jan 2025',
    tags: 'Full Stack / B2B / React + Rails',
  },
  ProjectImages: [
    { id: 1, title: 'Merkensoft Dashboard', img: Image1 },
    { id: 2, title: 'Inventory Management', img: Image2 },
    { id: 3, title: 'Vendor Portal', img: Image3 },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      { id: 1, title: 'Project Name', details: 'Merkensoft Wholesale Platform' },
      { id: 2, title: 'Category', details: 'B2B Web Application' },
      { id: 3, title: 'Company', details: 'Drylogics Solutions' },
      { id: 4, title: 'Tech Stack', details: 'React, TypeScript, Ruby on Rails, PostgreSQL' },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Build a scalable B2B wholesale platform enabling vendors and buyers to manage products, orders, and inventory with secure role-based access and a seamless React-powered frontend backed by Ruby on Rails APIs.',
    Technologies: [
      {
        title: 'Frontend',
        techs: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI'],
      },
      {
        title: 'Backend & Database',
        techs: ['Ruby on Rails', 'PostgreSQL', 'RESTful API', 'JWT Authentication'],
      },
      {
        title: 'DevOps & Tools',
        techs: ['Git', 'GitHub', 'Render', 'Role-Based Access Control'],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'User Authentication & RBAC: Implemented secure JWT-based authentication with role-based access control for admin, vendor, and buyer roles, ensuring each user sees only their permitted data and actions.',
      },
      {
        id: 2,
        details:
          'Inventory Management: Built a real-time inventory tracking system allowing vendors to manage stock levels, product listings, and pricing with instant UI updates via RESTful APIs.',
      },
      {
        id: 3,
        details:
          'RESTful API Design: Designed and implemented a clean Ruby on Rails API layer handling all frontend-backend communication, with proper validation, error handling, and data serialization.',
      },
      {
        id: 4,
        details:
          'Responsive UI: Crafted a fully responsive interface using Tailwind CSS and Material UI, optimized for both desktop and tablet use by wholesale business operators.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      { id: 1, name: 'Live Demo', url: 'https://app-dev.merkensoft.com' },
    ],
  },
  RelatedProject: {
    title: 'Other Projects',
    Projects: [
      { id: 2, title: 'VendorLine — PlanetBids', img: Image2 },
      { id: 3, title: 'Greenroom Theatrical Payroll', img: Image3 },
    ],
  },
};

const vendorLine: SingleProjectData = {
  id: 2,
  ProjectHeader: {
    title: 'VendorLine — PlanetBids Platform',
    publishDate: 'Sep 2024',
    tags: 'Full Stack / Vendor Management / React + Rails',
  },
  ProjectImages: [
    { id: 1, title: 'VendorLine Dashboard', img: Image2 },
    { id: 2, title: 'Vendor Onboarding Flow', img: Image1 },
    { id: 3, title: 'Workflow Management', img: Image3 },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      { id: 1, title: 'Project Name', details: 'VendorLine' },
      { id: 2, title: 'Platform', details: 'PlanetBids Procurement Platform' },
      { id: 3, title: 'Company', details: 'Drylogics Solutions' },
      { id: 4, title: 'Tech Stack', details: 'React, Ruby on Rails, PostgreSQL' },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Develop and enhance the VendorLine module within the PlanetBids procurement platform, streamlining vendor onboarding, management workflows, and integration with the broader platform ecosystem.',
    Technologies: [
      {
        title: 'Frontend',
        techs: ['React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Backend & Database',
        techs: ['Ruby on Rails', 'PostgreSQL', 'RESTful API'],
      },
      {
        title: 'Tools',
        techs: ['Git', 'GitHub', 'Render', 'Agile/Scrum'],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Vendor Onboarding: Built streamlined vendor registration and onboarding flows with multi-step forms and approval workflows integrated into the PlanetBids ecosystem.',
      },
      {
        id: 2,
        details:
          'Workflow Automation: Implemented vendor management workflows to automate routine procurement steps, reducing manual effort and improving process reliability.',
      },
      {
        id: 3,
        details:
          'Platform Integration: Integrated VendorLine features with the broader PlanetBids platform APIs, ensuring seamless data flow and consistent user experience.',
      },
      {
        id: 4,
        details:
          'Iterative Delivery: Delivered stable, production-ready features in iterative sprints using Git branching workflows and collaborative code reviews.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      { id: 1, name: 'Live Environment', url: 'https://vendorline.dev.preprod.planetbids.com' },
    ],
  },
  RelatedProject: {
    title: 'Other Projects',
    Projects: [
      { id: 1, title: 'Merkensoft Wholesale Platform', img: Image1 },
      { id: 3, title: 'Greenroom Theatrical Payroll', img: Image3 },
    ],
  },
};

const greenroom: SingleProjectData = {
  id: 3,
  ProjectHeader: {
    title: 'Greenroom — Theatrical Payroll Platform',
    publishDate: 'May 2024',
    tags: 'Full Stack / Payroll / React + Rails',
  },
  ProjectImages: [
    { id: 1, title: 'Payroll Dashboard', img: Image3 },
    { id: 2, title: 'Union Management', img: Image1 },
    { id: 3, title: 'Reporting Interface', img: Image2 },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      { id: 1, title: 'Project Name', details: 'Greenroom' },
      { id: 2, title: 'Category', details: 'Theatrical Payroll Processing' },
      { id: 3, title: 'Company', details: 'Drylogics Solutions / Tabletop Labs' },
      { id: 4, title: 'Tech Stack', details: 'React, TypeScript, Ruby on Rails, PostgreSQL' },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Develop a specialized payroll processing platform for theatrical productions, handling complex multi-union rules, diverse payment types, and industry-specific compliance reporting requirements.',
    Technologies: [
      {
        title: 'Frontend',
        techs: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI'],
      },
      {
        title: 'Backend & Database',
        techs: ['Ruby on Rails', 'PostgreSQL', 'RESTful API', 'Business Logic Engine'],
      },
      {
        title: 'Tools',
        techs: ['Git', 'GitHub', 'Render'],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Multi-Union Management: Implemented support for multiple theatrical unions each with their own payment rules, rates, and compliance requirements.',
      },
      {
        id: 2,
        details:
          'Diverse Payment Types: Built a flexible payment processing system supporting daily rates, weekly rates, overtime calculations, and union-specific allowances.',
      },
      {
        id: 3,
        details:
          'Compliance Reporting: Developed industry-specific reporting workflows generating union-compliant payroll reports, tax documents, and audit trails.',
      },
      {
        id: 4,
        details:
          'Scalable Business Logic: Designed a rules engine in Ruby on Rails to handle complex payroll calculations, ensuring accuracy and extensibility as production requirements evolve.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      { id: 1, name: 'Live Demo', url: 'https://app.greenroom-dev.tabletoplabs.studio' },
    ],
  },
  RelatedProject: {
    title: 'Other Projects',
    Projects: [
      { id: 1, title: 'Merkensoft Wholesale Platform', img: Image1 },
      { id: 2, title: 'VendorLine — PlanetBids', img: Image2 },
    ],
  },
};

const irisDesignStudio: SingleProjectData = {
  id: 4,
  ProjectHeader: {
    title: 'IRIS Design Studio — AI Desktop App',
    publishDate: 'Mar 2025',
    tags: 'Desktop App / AI / Electron + React + Python',
  },
  ProjectImages: [
    { id: 1, title: 'IRIS Design Studio Interface', img: Image4 },
    { id: 2, title: 'AI Upscaling Pipeline', img: Image1 },
    { id: 3, title: 'Background Removal Tool', img: Image2 },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      { id: 1, title: 'Project Name', details: 'IRIS Design Studio' },
      { id: 2, title: 'Category', details: 'Cross-Platform Desktop Application' },
      { id: 3, title: 'Company', details: 'Drylogics Solutions / Merkensoft' },
      { id: 4, title: 'Tech Stack', details: 'Electron, React, TypeScript, Python, FastAPI' },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Build a cross-platform desktop design workflow application with AI-powered image processing capabilities — including Real-ESRGAN upscaling, background removal, and 3D rendering — packaged as a native Electron app with a Python sidecar for GPU-accelerated AI tasks.',
    Technologies: [
      {
        title: 'Frontend (Electron + React)',
        techs: ['Electron', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Three.js', '@react-three/fiber'],
      },
      {
        title: 'AI & Processing (Python Sidecar)',
        techs: ['Python', 'FastAPI', 'Real-ESRGAN', 'TensorFlow.js', 'ONNX Runtime', 'PyInstaller'],
      },
      {
        title: 'Infrastructure',
        techs: ['Electron Builder', 'Sentry', 'Docker', 'Claude AI SDK'],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'AI Image Upscaling: Integrated Real-ESRGAN via a Python FastAPI sidecar to provide GPU-accelerated image upscaling directly within the desktop app, with automatic CPU fallback when no GPU is detected.',
      },
      {
        id: 2,
        details:
          'Background Removal: Implemented AI-powered background removal using @imgly/background-removal and ONNX Runtime, running entirely client-side without any server dependency.',
      },
      {
        id: 3,
        details:
          '3D Rendering: Integrated Three.js via @react-three/fiber to support 3D asset previewing and manipulation within the design canvas.',
      },
      {
        id: 4,
        details:
          'Packaged Desktop App: Built and packaged as a native cross-platform desktop application using Electron Builder, with the Python sidecar compiled to a standalone binary via PyInstaller for Windows and macOS.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      { id: 1, name: 'GitHub Org', url: 'https://github.com/Vasanth-Portfolio' },
    ],
  },
  RelatedProject: {
    title: 'Other Projects',
    Projects: [
      { id: 1, title: 'Merkensoft Wholesale Platform', img: Image1 },
      { id: 5, title: 'BI Platform API', img: Image5 },
    ],
  },
};

const biPlatformApi: SingleProjectData = {
  id: 5,
  ProjectHeader: {
    title: 'BI Platform — Multi-Tenant Analytics API',
    publishDate: 'Apr 2025',
    tags: 'Backend / BI / FastAPI + PostgreSQL + AWS',
  },
  ProjectImages: [
    { id: 1, title: 'BI Platform Architecture', img: Image5 },
    { id: 2, title: 'API Dashboard', img: Image6 },
    { id: 3, title: 'Multi-Tenant Data Flow', img: Image3 },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      { id: 1, title: 'Project Name', details: 'BI Platform API' },
      { id: 2, title: 'Category', details: 'Business Intelligence Backend Service' },
      { id: 3, title: 'Company', details: 'Drylogics Solutions / Merkensoft' },
      { id: 4, title: 'Tech Stack', details: 'Python, FastAPI, PostgreSQL, Redis, AWS Cognito, Docker' },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Build a scalable multi-tenant Business Intelligence API backend using FastAPI and PostgreSQL, with AWS Cognito authentication, Redis-backed Celery task queues for background processing, multi-tenant data isolation, and Docker-based deployment as part of the Merkensoft platform.',
    Technologies: [
      {
        title: 'Backend & API',
        techs: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic'],
      },
      {
        title: 'Database & Queue',
        techs: ['PostgreSQL', 'Redis', 'Celery'],
      },
      {
        title: 'Auth & Cloud',
        techs: ['AWS Cognito', 'JWT', 'AWS S3', 'Docker', 'Sentry'],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'AWS Cognito Authentication: Implemented JWT-based authentication using AWS Cognito, including PKCE OAuth flow for browser clients, token validation middleware, and role-based authorization gates.',
      },
      {
        id: 2,
        details:
          'Multi-Tenant Data Isolation: Built a tenant filter system using SQLAlchemy event hooks to automatically scope all database queries to the authenticated tenant, preventing cross-tenant data leakage.',
      },
      {
        id: 3,
        details:
          'Background Task Processing: Configured Celery with Redis as the message broker for asynchronous BI data processing tasks, with separate worker and API containers managed via Docker Compose.',
      },
      {
        id: 4,
        details:
          'Database Migrations: Managed schema evolution with Alembic migrations, integrated into the Docker prestart script to ensure zero-downtime deployments with automatic migration on startup.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      { id: 1, name: 'GitHub Org', url: 'https://github.com/Vasanth-Portfolio' },
    ],
  },
  RelatedProject: {
    title: 'Other Projects',
    Projects: [
      { id: 1, title: 'Merkensoft Wholesale Platform', img: Image1 },
      { id: 4, title: 'IRIS Design Studio', img: Image4 },
    ],
  },
};

export const allProjects: SingleProjectData[] = [merkensoft, vendorLine, greenroom, irisDesignStudio, biPlatformApi];

export function getProjectById(id: number): SingleProjectData {
  const project = allProjects.find(p => p.id === id);
  if (!project) {
    return allProjects[0];
  }
  return project;
}

export const singleProjectData = merkensoft;
