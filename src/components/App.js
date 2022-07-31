import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../APIs/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import DisplayToggleButtons from "./DisplayToggle";

import "./DisplayLayout.css";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    gridDisplay: "grid-display",
  };
  componentDidMount() {
    this.onTermSubmit("kurzgesagt");
  }

  onTermSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  videoListBelow = () => {
    this.setState({ gridDisplay: " " });
  };

  videoListOnRight = () => {
    this.setState({ gridDisplay: "grid-display" });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <DisplayToggleButtons videoListBelow={this.videoListBelow} videoListOnRight={this.videoListOnRight} />
        <div className={this.state.gridDisplay}>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

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
