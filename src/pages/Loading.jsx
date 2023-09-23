import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-dark z-50 absolute"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex">
        <motion.div
          className="h-4 w-4 bg-primary rounded-full mx-1"
          animate={{
            y: [0, -7, 0, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
            repeat: Infinity,
            repeatDelay: 0.25,
          }}
        />
        <motion.div
          className="h-4 w-4 bg-primary rounded-full mx-1"
          animate={{
            y: [0, -7, 0, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
            repeat: Infinity,
            repeatDelay: 0.25,
            delay: 0.25,
          }}
        />
        <motion.div
          className="h-4 w-4 bg-primary rounded-full mx-1"
          animate={{
            y: [0, -7, 0, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
            repeat: Infinity,
            repeatDelay: 0.25,
            delay: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loading;
