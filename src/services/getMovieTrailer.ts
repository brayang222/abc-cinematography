import { API_KEY } from "@/constants";
import axios from "axios";

export const getMovieVideos = async (movieId: number) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const { data: movieTrailer } = await axios.request(options);
    return movieTrailer;
  } catch (error) {
    throw error;
  }
};
