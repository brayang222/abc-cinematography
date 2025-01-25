import { MovieDetail } from "@/components/movie/MovieDetail";
import { getMovieById } from "@/services/getMovieById";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const movie = await getMovieById(params.id);
  return {
    title: movie.title || "ABC CINEMATOGRAPHY",
    description: movie.overview || "abc colombian cinematography",
  };
}

const page = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const movie = await getMovieById(id);
  console.log(movie);
  return (
    <div>
      <MovieDetail movie={movie} />
    </div>
  );
};

export default page;
