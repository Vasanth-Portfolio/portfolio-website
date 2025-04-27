import { useParams } from 'react-router-dom';
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { SingleProjectData, getProjectById } from '../data/singleProjectData';

const ProjectSingle = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState<SingleProjectData | null>(null);

  useEffect(() => {
    if (id) {
      const data = getProjectById(parseInt(id));
      setProjectData(data);
    }
  }, [id]);

  if (!projectData) {
    return <div>Loading project...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider initialData={projectData}>
        <ProjectHeader />
        <ProjectInfo />
        <ProjectRelatedProjects />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;