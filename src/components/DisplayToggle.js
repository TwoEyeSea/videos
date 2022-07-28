import React from "react";

const gridDisplay = document.querySelector(".grid-display");
const DisplayToggle = ({ gridOn, gridOff }) => {
  return (
    <div className="ui large buttons">
      <button onClick={() => gridOff()} className="ui button">
        Video List Below
      </button>
      <div className="or"></div>
      <button onClick={() => gridOn()} className="ui button">
        Video List on Right
      </button>
    </div>
  );
};

export default DisplayToggle;
