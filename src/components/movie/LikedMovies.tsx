"use client";
import { useLikesStorage } from "@/store/likesStore";
import { Card, CardBody, CardHeader } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { LikeButton } from "../LikeButton";
import Link from "next/link";
import Image from "next/image";
import { getMoviesByIds } from "@/utils/getMoviesByIds";
import { toast } from "sonner";
import { BASE_URL } from "@/constants";
import { Movie } from "@/types/movies";
import { MoviesSkeleton } from "../skeletons/MoviesSkeleton";

export const LikedMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { likeIds } = useLikesStorage();

  useEffect(() => {
    setIsLoading(true);
    getMoviesByIds(likeIds)
      .then((movies) => setMovies(movies))
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  }, [likeIds]);

  if (isLoading) {
    return <MoviesSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies ? (
        movies?.map((movie) => (
          <Card
            className="bg-transparent overflow-hidden max-w-[500px]"
            key={movie.id}
          >
            <LikeButton id={movie.id} />
            <Link href={`${movie.id}`}>
              <CardHeader>
                <Image
                  alt={`${movie.title} Poster`}
                  src={BASE_URL + movie.poster_path}
                  width={500}
                  height={700}
                  className=" w-full object-cover"
                />
              </CardHeader>
              <CardBody className="text-white p-4">
                <h3 className="text-lg font-bold text-white truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {movie.overview}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-semibold text-green-400">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-400">
                    {movie.release_date.split("-")[0]}
                  </span>
                </div>
              </CardBody>
            </Link>
          </Card>
        ))
      ) : (
        <p>No tienes películas favoritas</p>
      )}
    </div>
  );
};
