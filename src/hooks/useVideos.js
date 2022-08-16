import { useState, useEffect } from "react";

import YouTube from "../APIs/YouTube";

const useVideos = (term) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(term);
  }, []);

  const search = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
