"use client";
import Image from "next/image";
import React from "react";
import { LikeButton } from "../LikeButton";

export const MovieDetail = ({ movie }: any) => {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const {
    title,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    production_companies,
  } = movie;

  interface Genre {
    id: number;
    name: string;
  }

  interface Companie {
    id: number;
    name: string;
    logo_path: string;
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-12 md:p-12 min-w-screen min-h-screen">
      <h1 className="text-xl underline decoration-slate-500">{title}</h1>
      <div className="flex flex-col max-w-[500px] md:flex-row md:max-w-full gap-8 ">
        <div className="flex flex-col gap-4 w-full max-w-[500px] relative">
          <LikeButton id={movie.id} />
          <Image
            src={`${baseURL}${poster_path}`}
            alt={original_title}
            width={700}
            height={500}
            className="rounded-3xl w-full h-auto "
          />
        </div>
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>{release_date}</p>
            <p>⭐ {vote_average.toFixed(1)}</p>
          </div>
          <div className="flex gap-4 text-gray-400">
            <h3>Géneros:</h3>
            {genres ? (
              genres.map((genre: Genre) => (
                <p className="underline" key={genre.id}>
                  {genre.name}
                </p>
              ))
            ) : (
              <p>No tiene géneros asociados</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-400">Descripción:</h3>
            <p className="max-w-readable">{overview}</p>
          </div>
          <section className="flex flex-col gap-4">
            <h3 className="text-gray-400">Compañías:</h3>
            {production_companies ? (
              production_companies.map((companie: Companie) => (
                <div
                  className="flex items-center gap-4 p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300"
                  key={companie.id}
                >
                  {companie.logo_path && (
                    <img
                      src={baseURL + companie.logo_path}
                      alt={`${companie.name} Logo`}
                      className="w-14 h-14 object-contain"
                    />
                  )}
                  <p className="text-lg font-semibold text-gray-700">
                    {companie.name}
                  </p>
                </div>
              ))
            ) : (
              <p>Sin compañías </p>
            )}
          </section>
        </section>
      </div>
    </div>
  );
};
