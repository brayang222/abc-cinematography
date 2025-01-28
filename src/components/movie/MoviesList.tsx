"use client";
import { Card, CardBody, CardHeader, Image, Pagination } from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LikeButton } from "../LikeButton";
import { BASE_URL } from "@/constants";
import { Movie, Movies } from "@/types/movies";

export const MoviesList = ({
  moviesList,
  page,
}: {
  moviesList: Movies;
  page: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const movies = moviesList.results;
  const totalPages = moviesList.total_pages;

  const handlePageChange = (currentPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <>
      <div className="min-h-screen min-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center ">
        {movies.map((movie: Movie) => (
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
        ))}
      </div>
      <aside className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-5">
          <p className="text-small text-default-500">
            Página seleccionada: {page}
          </p>
          <Pagination
            color="warning"
            page={page}
            total={totalPages}
            onChange={handlePageChange}
            showControls
            isCompact
          />
        </div>
      </aside>
    </>
  );
};
