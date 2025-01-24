import axios from "axios";

export const getMovieById = async (id: number) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + key,
    },
  };

  const { data: movieID } = await axios.request(options);
  return movieID;
};
