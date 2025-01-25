"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Pagination,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LikeButton } from "../LikeButton";

export const MoviesList = ({ moviesList }: { moviesList: Movies }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const movies = moviesList.results;
  const totalPages = moviesList.total_pages;
  const baseURL = "https://image.tmdb.org/t/p/w500";

  console.log(moviesList);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    router.push(`?${params.toString()}`);
  }, [currentPage, router, searchParams]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center ">
      {movies.map((movie: any) => (
        <Card
          className="bg-transparent overflow-hidden max-w-[500px]"
          key={movie.id}
        >
          <LikeButton id={movie.id} />
          <Link href={`${movie.id}`}>
            <CardHeader>
              <Image
                alt={`${movie.title} Poster`}
                src={baseURL + movie.poster_path}
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
      <div className="flex flex-col gap-5">
        <p className="text-small text-default-500">
          Selected Page: {currentPage}
        </p>
        <Pagination
          color="warning"
          page={currentPage}
          total={totalPages}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2">
          <Button
            color="default"
            size="sm"
            variant="faded"
            onPress={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Previous
          </Button>
          <Button
            color="default"
            size="sm"
            variant="faded"
            onPress={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
