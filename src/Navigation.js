import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <div className="br2 shadow-5 lg">
        <Tilt
          className="Tilt"
          options={{ max: 55 }}
          style={{ height: 100, width: 100 }}
        >
          <div className="Tilt-inner">
            <img src={brain} alt="opolo" />
          </div>
        </Tilt>
      </div>
      <p className="link dim fa3 black underline pointer">Sign Out!</p>
    </div>
  );
};

export default Navigation;
