import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white md:pt-48 pt-28 md:pb-32 md:px-20 px-8 bg-dark h-screen flex justify-center items-center"
    >
      <span className="text-7xl font-bold font-head bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
        404
        <br />
        Page Not Found
      </span>
    </motion.div>
  );
};

export default NotFound;
