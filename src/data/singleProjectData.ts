import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
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
        details: 'github.com/Vasanth-Portfolio/todo-pro',
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
        url: 'https://github.com/Vasanth-Portfolio/todo-pro',
      },
      {
        id: 2,
        name: 'Case Study',
        url: 'https://vasanth.tech/blog/todo-case-study',
      },
      {
        id: 3,
        name: 'Live Demo',
        url: 'https://vasanth.website/productivitypro',
      },
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
    ],
  },
};

const eCommercePlatform: SingleProjectData = {
  id: 2,
  ProjectHeader: {
    title: 'ShopSphere E-Commerce',
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
        details: 'github.com/Vasanth-Portfolio/shopsphere',
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
        url: 'https://github.com/Vasanth-Portfolio/shopsphere',
      },
      {
        id: 2,
        name: 'Live Demo',
        url: 'https://vasanth.website/shopsphere',
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

const expenseTracker: SingleProjectData = {
  id: 3,
  ProjectHeader: {
    title: 'MoneyMind Expense Tracker',
    publishDate: 'Apr 10, 2025',
    tags: 'Full Stack / Finance App',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Expense Dashboard',
      img: Image1,
    },
    {
      id: 2,
      title: 'Transaction History',
      img: Image2,
    },
    {
      id: 3,
      title: 'Mobile Expense Tracking',
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'Project Overview',
    CompanyInfo: [
      {
        id: 1,
        title: 'Project Name',
        details: 'MoneyMind',
      },
      {
        id: 2,
        title: 'Category',
        details: 'Personal Finance',
      },
      {
        id: 3,
        title: 'Repository',
        details: 'github.com/Vasanth-Portfolio/expense-tracker',
      },
      {
        id: 4,
        title: 'Tech Stack',
        details: 'React, TypeScript, Express, MongoDB',
      },
    ],
    ObjectivesHeading: 'Project Goals',
    ObjectivesDetails:
      'Develop an intuitive expense tracking application with comprehensive financial insights, visualization tools, and multi-device synchronization to help users manage their finances effectively.',
    Technologies: [
      {
        title: 'Core Technologies',
        techs: [
          'React 18',
          'TypeScript',
          'Express.js',
          'MongoDB',
          'Tailwind CSS',
          'Chart.js'
        ],
      },
      {
        title: 'Additional Features',
        techs: [
          'JWT Authentication',
          'Data Export (CSV/PDF)',
          'Recurring Transactions',
          'Budget Alerts',
          'Responsive Design'
        ],
      },
    ],
    ProjectDetailsHeading: 'Key Features',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Transaction Management: Implemented a robust system for adding, editing, and categorizing income/expense transactions with support for attachments and notes.',
      },
      {
        id: 2,
        details:
          'Financial Dashboard: Created interactive charts using Chart.js to visualize spending patterns, category breakdowns, and monthly comparisons.',
      },
      {
        id: 3,
        details:
          'Budget Tracking: Developed a budget management system with alerts and progress tracking against user-defined financial goals.',
      },
      {
        id: 4,
        details:
          'Multi-Device Sync: Built a secure synchronization system using JWT authentication and RESTful APIs to ensure data consistency across devices.',
      },
    ],
    SocialSharingHeading: 'Project Links',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub Repo',
        url: 'https://github.com/Vasanth-Portfolio/expense-tracker',
      },
      {
        id: 2,
        name: 'Live Demo',
        url: 'https://vasanth.website/moneymind',
      },
    ],
  },
  RelatedProject: {
    title: 'More Finance Tools',
    Projects: [
      {
        id: 1,
        title: 'Investment Tracker',
        img: Image4,
      },
      {
        id: 2,
        title: 'Bill Reminder',
        img: Image5,
      },
      {
        id: 3,
        title: 'Tax Calculator',
        img: Image6,
      },
    ],
  },
};

export const allProjects: SingleProjectData[] = [
  productivityPro,
  eCommercePlatform,
  expenseTracker
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