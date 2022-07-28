import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../APIs/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import "./DisplayLayout.css";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onTermSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("This is the app", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* <DisplayToggle /> */}
        <div className="grid-display">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

//PlAYING AROUND WITH TOGGLING CLASSES BELOW

// import React from "react";
// import SearchBar from "./SearchBar";
// import YouTube from "../APIs/YouTube";
// import VideoList from "./VideoList";
// import VideoDetail from "./VideoDetail";
// import DisplayToggle from "./DisplayToggle";
// import "./DisplayLayout.css";

// let gridDisplay = "grid-display";

// class App extends React.Component {
//   state = {
//     videos: [],
//     selectedVideo: null,
//     displayGrid: false,
//   };

//   onTermSubmit = async (term) => {
//     const response = await YouTube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     console.log(response.data.items);
//     this.setState({ videos: response.data.items });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//     console.log("This is the app", video);
//   };

//   toggleDisplay = () => {
//     const [displayState, setDisplayState] = useState(false);

//     // const displayGrid = this.state.displayGrid;
//     // if (displayGrid) {
//     //   console.log("was true");
//     //   return (gridDisplay = "grid-display");
//     // }
//     // console.log("was false");
//     // return (gridDisplay = undefined);
//   };

//   gridOn = () => {
//     // this.setState({ displayGrid: true });
//     this.toggleDisplay();
//     console.log("now true");
//   };

//   gridOff = () => {
//     // this.setState({ displayGrid: false });
//     this.toggleDisplay();
//     console.log("now false");
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <DisplayToggle gridOn={this.gridOn} gridOff={this.gridOff} />
//         <div className={`gridDisplay`}>
//           <VideoDetail video={this.state.selectedVideo} />
//           <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
