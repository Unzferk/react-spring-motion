import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import "./styles.css";
import Presentation from "../components/Presentation";
import Transitions from "../components/transitions/Transitions";
import Nav from "../components/shared/nabvar/Nav";
import Show from "../components/show/Show";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const PresentationHero: React.FC = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className="container">
      <Nav></Nav>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#2e2e57" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.1}
          //onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Show parallax={parallax} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default PresentationHero;
