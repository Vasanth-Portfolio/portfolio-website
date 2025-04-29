import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import { JSX, ReactElement } from 'react';

// Interface definitions remain the same
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
  id: number; // Added ID field
  ProjectHeader: ProjectHeader;
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
  RelatedProject: RelatedProject;
}

// Create multiple project data objects
const productivityPro: SingleProjectData = {
  id: 1,
  ProjectHeader: {
    title: 'Productivity Pro - Todo List',
    publishDate: 'Mar 15, 2025',
    tags: 'Full Stack / Productivity App',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Todo App Main Interface',
      img: Image1,
    },
    {
      id: 2,
      title: 'Mobile Task Management',
      img: Image2,
    },
    {
      id: 3,
      title: 'Team Collaboration View',
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      {
        id: 1,
        title: 'Project Name',
        details: 'Productivity Pro',
      },
      {
        id: 2,
        title: 'Category',
        details: 'Productivity Suite',
      },
      {
        id: 3,
        title: 'Repository',
        details: 'github.com/yourrepo/todo-pro',
      },
      {
        id: 4,
        title: 'Tech Stack',
        details: 'MERN (MongoDB, Express, React, Node)',
      },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Develop a comprehensive productivity application with intelligent task management, team collaboration features, and AI-powered suggestions to optimize personal and professional workflows.',
    Technologies: [
      {
        title: 'Core Technologies',
        techs: [
          'React 18',
          'Node.js',
          'MongoDB Atlas',
          'GraphQL',
          'Material UI',
          'Jest',
          'Cypress'
        ],
      },
      {
        title: 'Additional Tools',
        techs: [
          'OpenAI API',
          'WebSocket',
          'Jira Integration',
          'Google Calendar API',
          'Stripe Payments'
        ],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Smart Task Prioritization: Implemented an AI-driven Eisenhower Matrix that automatically categorizes tasks based on urgency and importance, with dynamic reprioritization as deadlines approach.',
      },
      {
        id: 2,
        details:
          'Cross-Platform Sync: Built a real-time synchronization engine using WebSockets and GraphQL subscriptions, ensuring instant updates across all devices with conflict resolution for offline edits.',
      },
      {
        id: 3,
        details:
          'Team Workspaces: Developed collaborative spaces with role-based permissions, @mentions, and activity feeds, enabling seamless teamwork with integrated video conferencing via Daily.co API.',
      },
      {
        id: 4,
        details:
          'Productivity Analytics: Created comprehensive dashboards with time tracking integration, habit formation metrics, and personalized improvement suggestions using machine learning models.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub Repo',
        url: 'https://github.com/Vasanth-Portfolio',
      },
      {
        id: 2,
        name: 'Case Study',
        url: 'https://medium.com/yourblog/todo-case-study',
      },
      // {
      //   id: 3,
      //   name: 'Live Demo',
      //   url: 'https://demo.productivitypro.app',
      // },
      // {
      //   id: 4,
      //   name: 'Product Hunt',
      //   url: 'https://producthunt.com/products/productivity-pro',
      // },
    ],
  },
  RelatedProject: {
    title: 'More Productivity Tools',
    Projects: [
      {
        id: 1,
        title: 'Time Block Planner',
        img: Image4,
      },
      {
        id: 2,
        title: 'Meeting Note Taker',
        img: Image5,
      },
      {
        id: 3,
        title: 'Focus Timer',
        img: Image6,
      },
      {
        id: 4,
        title: 'Goal Tracker',
        img: Image3,
      },
    ],
  },
};

const eCommercePlatform: SingleProjectData = {
  id: 2,
  ProjectHeader: {
    title: 'E-Commerce Platform',
    publishDate: 'Jan 20, 2025',
    tags: 'Full Stack / E-Commerce',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Product Listing Page',
      img: Image4,
    },
    {
      id: 2,
      title: 'Shopping Cart',
      img: Image5,
    },
    {
      id: 3,
      title: 'Checkout Process',
      img: Image6,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      {
        id: 1,
        title: 'Project Name',
        details: 'ShopSphere',
      },
      {
        id: 2,
        title: 'Category',
        details: 'E-Commerce Platform',
      },
      {
        id: 3,
        title: 'Repository',
        details: 'github.com/yourrepo/shopsphere',
      },
      {
        id: 4,
        title: 'Tech Stack',
        details: 'Next.js, Node.js, PostgreSQL',
      },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Build a scalable e-commerce platform with modern features like AI-powered recommendations, AR product previews, and seamless checkout experience.',
    Technologies: [
      {
        title: 'Core Technologies',
        techs: [
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'Redis',
          'Tailwind CSS',
          'Jest'
        ],
      },
      {
        title: 'Additional Tools',
        techs: [
          'Stripe API',
          'Cloudinary',
          'Algolia Search',
          'WebRTC',
          'Three.js'
        ],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'AI Recommendations: Implemented a machine learning model that suggests products based on browsing history and purchase patterns.',
      },
      {
        id: 2,
        details:
          'AR Product Previews: Integrated WebXR for augmented reality product visualization directly in the browser.',
      },
      {
        id: 3,
        details:
          'Instant Checkout: Developed a one-click checkout system with biometric authentication for returning customers.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub Repo',
        url: 'https://github.com/yourrepo/shopsphere',
      },
      {
        id: 2,
        name: 'Live Demo',
        url: 'https://demo.shopsphere.app',
      },
    ],
  },
  RelatedProject: {
    title: 'More E-Commerce Projects',
    Projects: [
      {
        id: 1,
        title: 'Marketplace API',
        img: Image1,
      },
      {
        id: 2,
        title: 'POS System',
        img: Image2,
      },
      {
        id: 3,
        title: 'Inventory Manager',
        img: Image3,
      },
    ],
  },
};

export const allProjects: SingleProjectData[] = [
  productivityPro,
  eCommercePlatform,
];

export function getProjectById(id: number): SingleProjectData {
  const project = allProjects.find(project => project.id === id);
  
  if (!project) {
    console.warn(`Project with ID ${id} not found, returning first project`);
    return allProjects[0];
  }
  
  return project;
}

export const singleProjectData = productivityPro;