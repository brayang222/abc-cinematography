"use client";
import { MoviesList } from "@/components/MoviesList";
import { getTopRatedMovies } from "@/services/getTopRatedMovies";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  const page = useSearchParams().get("page");

  useEffect(() => {
    const fetchTopRatedMovies = async (page: any) => {
      const movies = await getTopRatedMovies(page);
      setTopRatedMovies(movies);
    };

    fetchTopRatedMovies(page);
  }, [page]);

  if (!topRatedMovies) return <p>Loading...</p>;

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <MoviesList topRatedMovies={topRatedMovies} />
    </main>
  );
}
