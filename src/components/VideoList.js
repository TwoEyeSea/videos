import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    // Don't forget to add the mapped video array items as a prop to the VideoItem component
  });
  return <div className="ui relaxed divided list video-list">{renderedList}</div>;
};

export default VideoList;
