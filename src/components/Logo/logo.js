import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45, scale: 1.1 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pt3 pl1">
          <img alt="brain logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
