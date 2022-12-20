import React, { useState, useCallback, useRef, useEffect } from "react";
import logo from "../logo.svg";
import { animated, useSpring } from "@react-spring/web";
import { useTransition } from "@react-spring/web";
import { motion, animate } from "framer-motion";
import "../App.css";
import styles from "../styles.module.css";

const Presentation: React.FC = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(300px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(300px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Simple", "Modern", "Minimalist"]), 1000)
    );
    ref.current.push(setTimeout(() => set(["Simple", "Minimalist"]), 5000));
    ref.current.push(
      setTimeout(() => set(["Simple", "Modern", "Minimalist"]), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.leftcont}>
        <div>
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div
              className={styles.transitionsItem}
              style={rest}
              onClick={reset}
            >
              <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                {item}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
      <div className={styles.rightcont}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Presentation;
