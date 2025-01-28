import { MovieDetail } from "@/components/movie/MovieDetail";
import { getMovieById } from "@/services/getMovieById";
import { getMovieVideos } from "@/services/getMovieTrailer";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovieById(id);
  return {
    title: movie.title || "ABC CINEMATOGRAPHY",
    description: movie.overview || "abc colombian cinematography",
  };
}

type Params = Promise<{ id: number }>;

const page = async ({ params }: { params: Params }) => {
  try {
    const { id } = await params;
    const [movie, videos] = await Promise.all([
      getMovieById(id),
      getMovieVideos(id),
    ]);

    return (
      <div>
        <MovieDetail movie={movie} videos={videos} />
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      notFound();
    }
    throw error;
  }
};

export default page;
