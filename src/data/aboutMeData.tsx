import { ReactNode } from "react";

interface AboutMeItem {
  id: number;
  bio: string | ReactNode;
}

export const aboutMeData: AboutMeItem[] = [
  {
    id: 1,
    bio: "I'm a Full Stack Developer with 2+ years of experience building production web applications using React, TypeScript, and Ruby on Rails. I deliver end-to-end features — from responsive UIs with Tailwind CSS and Material UI to RESTful APIs and PostgreSQL-backed backends — across B2B, vendor management, and payroll platforms.",
  },
  {
    id: 2,
    bio: (
      <>
        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
          What I Do Best:
        </h3>
        <ul className="space-y-3 pl-5 mb-6">
          {[
            "Build full-stack applications with React + TypeScript frontend and Ruby on Rails backend",
            "Design and implement RESTful APIs with authentication and role-based access control",
            "Craft responsive, pixel-perfect UIs using Tailwind CSS and Material UI",
            "Manage PostgreSQL databases with ActiveRecord and write clean migrations",
            "Deploy and maintain production applications on Render with Git-based workflows",
          ].map((item, index) => (
            <li
              key={index}
              className="relative pl-6 text-gray-700 dark:text-gray-300 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-dark dark:before:bg-primary-light"
            >
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
          Tech Stack:
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "React",
            "TypeScript",
            "Ruby on Rails",
            "PostgreSQL",
            "Tailwind CSS",
            "Material UI",
            "REST API",
            "Git & GitHub",
            "Render",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </span>
          ))}
        </div>

        <blockquote className="mt-8 italic border-l-4 border-blue-500 pl-6 py-2 bg-gray-50 dark:bg-gray-800 rounded-r-lg text-gray-700 dark:text-gray-300">
          "I own the full stack — from the UI a user sees to the API that powers it."
        </blockquote>
      </>
    ),
  },
];
