import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         MD Dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/mdgwebdeveloper/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://x.com/Mdawg1943">
            <img src="/X.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
