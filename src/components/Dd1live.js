import React from "react";

const Dd1live = () => {
  return (
    <div>
      <text style={{position:"relative",top:"20px"}}>Live from Sriharikota,via youtube.</text>
      <iframe
        style={{ position: "relative", top: "40px" }}
        width="100%"
        height="315px"
        src="https://www.youtube.com/embed/6f_HxuVHfrw?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

export default Dd1live;
