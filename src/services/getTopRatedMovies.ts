import axios from "axios";

export const getTopRatedMovies = async (page: string) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: page },
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + key,
    },
  };

  const { data: topRatedMovies } = await axios.request(options);

  return topRatedMovies;
};
