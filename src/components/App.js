import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../APIs/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import DisplayToggleButtons from "./DisplayToggle";
import "./DisplayLayout.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [gridDisplay, setGridDisplay] = useState("grid-display");

  useEffect(() => {
    onTermSubmit("kurzgesagt");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const videoListBelow = () => {
    setGridDisplay(" ");
  };

  const videoListOnRight = () => {
    setGridDisplay("grid-display");
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <DisplayToggleButtons videoListBelow={videoListBelow} videoListOnRight={videoListOnRight} />
      <div className={gridDisplay}>
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
      </div>
    </div>
  );
};

// class BApp extends React.Component {
//   state = {
//     videos: [],
//     selectedVideo: null,
//     gridDisplay: "grid-display",
//   };

//   componentDidMount() {
//     this.onTermSubmit("kurzgesagt");
//   }

//   onTermSubmit = async (term) => {
//     const response = await YouTube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   videoListBelow = () => {
//     this.setState({ gridDisplay: " " });
//   };

//   videoListOnRight = () => {
//     this.setState({ gridDisplay: "grid-display" });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <DisplayToggleButtons videoListBelow={this.videoListBelow} videoListOnRight={this.videoListOnRight} />
//         <div className={this.state.gridDisplay}>
//           <VideoDetail video={this.state.selectedVideo} />
//           <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;

//STYLING THE GRID USING SEMANTIC UI CLASSNAMES
// render() {
//   return (
//     <div className="ui container">
//       <SearchBar onFormSubmit={this.onTermSubmit} />
//       <DisplayToggleButtons videoListBelow={this.videoListBelow} videoListOnRight={this.videoListOnRight} />
//       <div className={"ui grid"}>
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={this.state.selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// }
