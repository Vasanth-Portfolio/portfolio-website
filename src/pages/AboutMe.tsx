import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      delay: 1,
    },
    exit: { opacity: 0 },
  };

  return (
    <AboutMeProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        className="container mx-auto"
      >
        <AboutCounter />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        className="container mx-auto"
      >
        <AboutClients />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
