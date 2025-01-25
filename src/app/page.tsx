"use client";
import { MoviesList } from "@/components/movie/MoviesList";
import { SearchInput } from "@/components/SearchInput";
import { getSearchMovie } from "@/services/getSearchMovie";
import { getTopRatedMovies } from "@/services/getTopRatedMovies";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [moviesList, setMoviesList] = useState(null);

  const page = useSearchParams().get("page");
  const search = useSearchParams().get("search");
  console.log(search);

  useEffect(() => {
    const fetchMovies = async (page: any) => {
      if (!search) {
        const moviesList = await getTopRatedMovies(page);
        setMoviesList(moviesList);
      } else {
        const moviesList = await getSearchMovie(page, search);
        setMoviesList(moviesList);
      }
    };

    fetchMovies(page);
  }, [page, search]);

  if (!moviesList) return <p>Loading...</p>;

  return (
    <main className="w-full h-full flex flex-col  justify-center p-4 md:p-10">
      <SearchInput />
      <MoviesList moviesList={moviesList} />
    </main>
  );
}
