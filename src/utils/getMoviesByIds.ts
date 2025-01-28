import { getMovieById } from "@/services/getMovieById";

export const getMoviesByIds = async (likeIds: number[]) => {
  try {
    const likedMovies = [];
    for (const id of likeIds) {
      const movie = await getMovieById(id);
      likedMovies.push(movie);
    }

    return likedMovies;
  } catch (error) {
    throw error;
  }
};
