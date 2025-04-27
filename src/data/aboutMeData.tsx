import { ReactNode } from "react";

interface AboutMeItem {
  id: number;
  bio: string | ReactNode;
}

export const aboutMeData: AboutMeItem[] = [
  {
    id: 1,
    bio: "I'm a React.js developer specializing in Material UI (MUI) and Tailwind CSS, with experience in Ruby for automation. I build fast, responsive, and visually polished web applications while optimizing performance and maintainability.",
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
            "Develop high-performance UIs with React, Next.js, and TypeScript",
            "Craft pixel-perfect designs using MUI + Tailwind CSS",
            "Optimize apps (reduced bundle sizes by 30%+ via code-splitting & lazy loading)",
            "Integrate REST/GraphQL APIs with Redux & React Query",
            "Mentor junior developers in React best practices",
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
            "Next.js",
            "TypeScript",
            "MUI",
            "Tailwind CSS",
            "Redux",
            "Ruby (RSpec/Capybara)",
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
          "I build interfaces that users love—smooth, intuitive, and invisible
          in their simplicity."
        </blockquote>
      </>
    ),
  },
];
