import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      {/* We can also get video Thumbnails from the Youtube API */}
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
  // DON'T FORGET TO RETURN() YOUR JSX SILLY BOY!
};

export default VideoItem;
