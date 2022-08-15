import axios from "axios";
// API Key 1
// API Key 2 AIzaSyAYwDf0oV2FTd5ee4N9TUpSoKaH8vXxZNw
const KEY = "AIzaSyApUFZoyRG9tJv1gxa0YJLx-FhepwxMxbE";

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
