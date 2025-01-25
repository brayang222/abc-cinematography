import { LikedMovies } from "@/components/movie/LikedMovies";
import React from "react";

const Likes = async () => {
  return (
    <section className="min-w-screen min-h-screen p-4">
      <h1 className="text-xl ">Mis Likes: </h1>
      <LikedMovies />
    </section>
  );
};

export default Likes;
