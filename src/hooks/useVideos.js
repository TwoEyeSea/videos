import { useState, useEffect } from "react";

import YouTube from "../APIs/YouTube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const response = await YouTube.get("/search", {
      params: {
        q: "kurzgesagt",
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
