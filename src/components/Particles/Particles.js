import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

const Particle = () => {
  return (
    <div className="particle">
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 4,
              anim: {
                enable: true,
              },
            },
            move: {
              speed: 1.2,
            },
          },
        }}
      />
    </div>
  );
};

export default Particle;
