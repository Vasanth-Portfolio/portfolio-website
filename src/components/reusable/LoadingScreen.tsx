import { motion } from 'framer-motion';

const RunningGearLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center w-72 h-32 bg-gray-900 rounded-lg gap-4 p-4"
    >
      <motion.p
        className="text-blue-300 text-sm font-medium text-center"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        Loading system resources...
      </motion.p>

      <div className="w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default RunningGearLoader;
