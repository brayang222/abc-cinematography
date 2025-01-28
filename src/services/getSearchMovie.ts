import { API_KEY } from "@/constants";
import axios from "axios";

export const getSearchMovie = async (page: number, search: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: search,
        include_adult: "false",
        language: "en-US",
        page: page,
      },
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const { data: searchMovie } = await axios.request(options);
    return searchMovie;
  } catch (error) {
    throw error;
  }
};
