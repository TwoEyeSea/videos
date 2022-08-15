import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import DisplayToggleButtons from "./DisplayToggle";
import useVideos from "../hooks/useVideos";
import "./DisplayLayout.css";

const App = () => {
  // const defaultTerm = "kurzgesagt";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [gridDisplay, setGridDisplay] = useState("grid-display");
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const videoListBelow = () => {
    setGridDisplay(" ");
  };

  const videoListOnRight = () => {
    setGridDisplay("grid-display");
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <DisplayToggleButtons videoListBelow={videoListBelow} videoListOnRight={videoListOnRight} />
      <div className={gridDisplay}>
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default App;
