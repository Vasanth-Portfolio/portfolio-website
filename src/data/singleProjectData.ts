import Image1 from '../images/web-project-1.jpg';
import Image2 from '../images/mobile-project-1.jpg';
import Image3 from '../images/mobile-project-2.jpg';
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

export const allProjects: SingleProjectData[] = [merkensoft, vendorLine, greenroom];

export function getProjectById(id: number): SingleProjectData {
  const project = allProjects.find(p => p.id === id);
  if (!project) {
    return allProjects[0];
  }
  return project;
}

export const singleProjectData = merkensoft;
