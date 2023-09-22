import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
