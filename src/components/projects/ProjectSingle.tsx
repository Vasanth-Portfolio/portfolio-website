import { motion } from 'framer-motion';
import { Key } from 'react';
import { Link } from 'react-router-dom';

interface ProjectSingleProps {
  title: string;
  category: string;
  image: string;
  id: Key | null | undefined; 
}

const ProjectSingle = ({ 
  title, 
  category, 
  image,
  id 
}: ProjectSingleProps) => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link 
        to={`/projects/single-project${id ? `/${id}` : ''}`} 
        aria-label={`View ${title} project`}
      >
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none w-full h-48 object-cover"
              alt={`${title} project screenshot`}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;