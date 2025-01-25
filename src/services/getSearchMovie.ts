import axios from "axios";

export const getSearchMovie = async (page: number, search: string) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
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
      Authorization: "Bearer " + key,
    },
  };

  const { data: searchMovie } = await axios.request(options);
  return searchMovie;
};
