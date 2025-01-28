"use client";
import Image from "next/image";
import { LikeButton } from "../LikeButton";
import { BASE_URL } from "@/constants";
import { Company, Genre, Movie, Video, Videos } from "@/types/movies";

export const MovieDetail = ({
  movie,
  videos,
}: {
  movie: Movie;
  videos: Videos;
}) => {
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

  const { results } = videos;
  const trailer =
    results?.find((video: Video) => video.type === "Trailer")?.key || null;

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-12 md:p-12 min-w-screen min-h-screen">
      <h1 className="text-xl underline decoration-slate-500">{title}</h1>
      <div className="flex flex-col max-w-[500px] md:flex-row md:max-w-full gap-8 ">
        <div className="flex flex-col gap-4 w-full max-w-[500px] relative">
          <LikeButton id={movie.id} />
          <Image
            src={`${BASE_URL}${poster_path}`}
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
            {genres && genres.length > 0 ? (
              <>
                <h3>Géneros:</h3>
                {genres.map((genre: Genre) => (
                  <p className="underline" key={genre.id}>
                    {genre.name}
                  </p>
                ))}
              </>
            ) : (
              <p>No tiene géneros asociados</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {overview ? (
              <>
                <h3 className="text-gray-400">Descripción:</h3>
                <p className="max-w-readable">{overview}</p>
              </>
            ) : (
              <p>No tiene descripción</p>
            )}
          </div>
          <section className="flex flex-col gap-4">
            {production_companies && production_companies.length > 0 ? (
              <>
                <h3 className="text-gray-400">Compañías:</h3>
                {production_companies.map((company: Company) => (
                  <div
                    className="flex items-center gap-4 p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300"
                    key={company.id}
                  >
                    {company.logo_path && (
                      <Image
                        src={BASE_URL + company.logo_path}
                        alt={`${company.name} Logo`}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    )}
                    <p className="text-lg font-semibold text-gray-700">
                      {company.name}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <p>Sin compañías </p>
            )}
          </section>
          {trailer && (
            <iframe
              src={`https://www.youtube.com/embed/${trailer}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-72 rounded-xl shadow-md"
            ></iframe>
          )}
        </section>
      </div>
    </div>
  );
};
