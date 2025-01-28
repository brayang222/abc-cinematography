import { API_KEY } from "@/constants";
import axios, { AxiosError } from "axios";

export const getMovieById = async (id: number) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const { data: movieID } = await axios.request(options);
    return movieID;
  } catch (error: AxiosError | unknown) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      throw new Error("NOT_FOUND");
    }
    throw error;
  }
};
