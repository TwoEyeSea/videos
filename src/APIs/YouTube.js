import axios from "axios";

const KEY = "AIzaSyAzJlakREUOWQfG_PupPIkvaacqf78tk0I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
    // we don't want
  },
});
