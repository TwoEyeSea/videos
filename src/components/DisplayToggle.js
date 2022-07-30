import React from "react";

const DisplayToggle = ({ videoListOnRight, videoListBelow }) => {
  return (
    <div className="ui large buttons">
      <button onClick={() => videoListBelow()} className="ui button">
        Video List Below
      </button>
      <div className="or"></div>
      <button onClick={() => videoListOnRight()} className="ui button">
        Video List on Right
      </button>
    </div>
  );
};

export default DisplayToggle;
