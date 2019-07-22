import React from "react";
import { FlipClock } from "reactflipclock-js";
import "./clock.css";

const Isroclock = props => {
  return (
    <div className="containerClock">
      <FlipClock time={props.timeLeftInSeconds} clockFace="HourlyCOunter" />
    </div>
  );
};

export default Isroclock;
