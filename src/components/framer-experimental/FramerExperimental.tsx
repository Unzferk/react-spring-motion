import React from "react";
import { motion, animate } from "framer-motion";
import "./styles.css";
import WindowBox from "../window-box/WindowBox";

const FramerExperimental: React.FC = () => {
  return (
    <div className="framer-container">
      <motion.div
        className="box"
        initial={{ x: -150 }}
        transition={{ duration: 2 }}
        animate={{ rotate: [0, 35, 0], x: [-100, 0, 0] }}
        style={{ borderRadius: 24 }}
      >
        <WindowBox with="350px" height="150px" />
      </motion.div>
      <motion.button
        className="butt"
        transition={{ duration: 2 }}
        animate={{ rotate: [0, 35, 0], x: [-100, 0, 0] }}
      >
        button
      </motion.button>
    </div>
  );
};

export default FramerExperimental;
