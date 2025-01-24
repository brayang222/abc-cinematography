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

export const MoviesList = ({ topRatedMovies }: { topRatedMovies: Movies }) => {
  const movies = topRatedMovies.results;
  const baseURL = "https://image.tmdb.org/t/p/w500";

  console.log(topRatedMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const search = useSearchParams().get("search");
  console.log(search);

  useEffect(() => {
    router.push(`?page=${currentPage}`);
  }, [currentPage, router]);

  return (
    <main className="grid grid-cols-2 gap-8 items-center justify-center">
      {search ? (
        <></>
      ) : (
        movies.map((movie: any) => (
          <Card className="py-4" as={Link} href={`/${movie.id}`} key={movie.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h3 className="uppercase font-bold text-black">{movie.title}</h3>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl z-10 "
                src={baseURL + movie.backdrop_path}
                width={270}
              />
            </CardBody>
          </Card>
        ))
      )}
      <div className="flex flex-col gap-5">
        <p className="text-small text-default-500">
          Selected Page: {currentPage}
        </p>
        <Pagination
          color="secondary"
          page={currentPage}
          total={10}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2">
          <Button
            color="secondary"
            size="sm"
            variant="flat"
            onPress={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Previous
          </Button>
          <Button
            color="secondary"
            size="sm"
            variant="flat"
            onPress={() =>
              setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
};
