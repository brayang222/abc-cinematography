import { LikedMovies } from "@/components/movie/LikedMovies";
import { MoviesSkeleton } from "@/components/skeletons/MoviesSkeleton";
import React, { Suspense } from "react";

const Likes = async () => {
  return (
    <section className="min-w-screen min-h-screen p-4">
      <h1 className="text-xl ">Mis Likes: </h1>
      <Suspense fallback={<MoviesSkeleton />}>
        <LikedMovies />
      </Suspense>
    </section>
  );
};

export default Likes;
