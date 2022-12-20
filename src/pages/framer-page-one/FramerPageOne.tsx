import { motion } from "framer-motion";
import React from "react";
import WindowBox from "../../components/window-box/WindowBox";
import "./styles.css";

const FramerPageOne: React.FC = () => {
  return (
    <div className="framer-container">
      <div className="section">
        <motion.div
          initial={{ x: -150 }}
          transition={{ duration: 5 }}
          animate={{ rotate: [0, 35, 0], x: [180, 0, 0] }}
        >
          <WindowBox with="100px" height="80px" />
        </motion.div>

        <motion.div
          transition={{ duration: 3 }}
          animate={{ rotate: [0, 360, 0] }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 1 },
          }}
        >
          <WindowBox with="150px" height="100px" />
        </motion.div>
        <motion.div
          transition={{ duration: 5 }}
          animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.7, 1] }}
        >
          <WindowBox with="150px" height="80px" />
        </motion.div>
      </div>
      <div className="section">
        <WindowBox with="500px" height="180px" />
      </div>
    </div>
  );
};

export default FramerPageOne;
