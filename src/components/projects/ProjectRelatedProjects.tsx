import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectRelatedProjects = () => {
  const context = useContext(SingleProjectContext);

  if (!context?.singleProjectData?.RelatedProject) {
    return <div className="text-primary-dark dark:text-primary-light">
      Loading related projects...
    </div>;
  }

  const { RelatedProject } = context.singleProjectData;

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {RelatedProject.Projects.map(
          (project: { id: number; img: string; title: string }) => (
            <div key={project.id} className="group relative">
              <img
                src={project.img}
                className="rounded-xl cursor-pointer transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                alt={project.title}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                <p className="text-white font-general-medium text-lg group-hover:text-secondary-light transition-colors duration-300">
                  {project.title}
                </p>
              </div>
              <div className="absolute inset-0 bg-primary-dark dark:bg-secondary-dark opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;