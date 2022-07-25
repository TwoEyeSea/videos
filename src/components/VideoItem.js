import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      //We can also get video Thumbnails from the Youtube API
      {video.snippet.title}
    </div>
  );
  // DON'T FORGET TO RETURN() YOUR JSX SILLY BOY!
};

export default VideoItem;
