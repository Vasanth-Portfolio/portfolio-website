import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import TodoView from "./todo/TodoView";

interface CompanyInfoItem {
  id: number;
  title: string;
  details: string;
}

const ProjectInfo = () => {
  const context = useContext(SingleProjectContext);
  
  if (!context || !context.singleProjectData) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="font-general-regular text-lg text-primary-dark dark:text-primary-light mt-4">
          Loading project data...
        </p>
      </div>
    );
  }

  const { singleProjectData } = context;
  const projectInfo = singleProjectData.ProjectInfo;

  const renderLink = (info: CompanyInfoItem) => {
    const isLink = ["Website", "Phone", "Repository", "Demo"].includes(info.title);
    const isEmail = info.title === "Email";
    const href = isEmail 
      ? `mailto:${info.details}`
      : isLink
      ? info.details.startsWith('http') 
        ? info.details 
        : `https://${info.details}`
      : '#';

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          isLink || isEmail
            ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
            : ""
        }
        aria-label={`Project ${info.title}`}
      >
        {info.details}
      </a>
    );
  };

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Client details */}
        <div className="mb-7">
          <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {projectInfo.ClientHeading}
          </h2>
          <ul className="leading-loose">
            {projectInfo.CompanyInfo.map((info) => (
              <li
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                key={info.id}
              >
                <span className="font-medium">{info.title}: </span>
                {renderLink(info)}
              </li>
            ))}
          </ul>
        </div>

        {/* Project objectives */}
        <div className="mb-7">
          <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.ObjectivesHeading}
          </h2>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-7">
          <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Technologies Used
          </h2>
          <div className="space-y-4">
            {projectInfo.Technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="font-medium text-primary-dark dark:text-primary-light">
                  {tech.title}
                </h3>
                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                  {tech.techs.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

     
      </div>

      {/* Project details - TodoView */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <TodoView />
        
        {/* Social Sharing */}
        {projectInfo.SocialSharing && projectInfo.SocialSharing.length > 0 && (
          <div className="mt-10">
            <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
              {projectInfo.SocialSharingHeading}
            </h2>
            <div className="flex flex-wrap gap-4">
              {projectInfo.SocialSharing.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;