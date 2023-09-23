import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="bg-dark">
      <Navbar />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
