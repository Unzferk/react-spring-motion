import React, { Fragment } from "react";
import Home from "./components/hero/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bubble from "./components/Bubble/bubble";
import Transitions from "./components/transitions/Transitions";
import FramerExperimental from "./components/framer-experimental/FramerExperimental";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FramerExperimental />} />
          <Route path="bubble" element={<Bubble />} />
          <Route path="transition" element={<Transitions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
