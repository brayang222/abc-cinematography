import { API_KEY } from "@/constants";
import axios from "axios";

export const getTopRatedMovies = async (page: number) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US", page: page },
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const { data: topRatedMovies } = await axios.request(options);

    return topRatedMovies;
  } catch (error) {
    return error;
  }
};
