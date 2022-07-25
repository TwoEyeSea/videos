import React from "react";
import VideoItem from "./VideoItem";
// import "./VideoList.css";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
