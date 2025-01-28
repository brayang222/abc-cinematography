import { MoviesList } from "@/components/movie/MoviesList";
import { SearchInput } from "@/components/SearchInput";
import { getSearchMovie } from "@/services/getSearchMovie";
import { getTopRatedMovies } from "@/services/getTopRatedMovies";

type Params = Promise<{ page: string | null; search: string | null }>;

export default async function Home({ searchParams }: { searchParams: Params }) {
  const search = (await searchParams).search || "";
  const page = (await searchParams).page
    ? Number((await searchParams).page)
    : 1;

  const moviesList = search
    ? await getSearchMovie(page, search)
    : await getTopRatedMovies(page);

  return (
    <main className="w-full min-h-screen flex flex-col p-4 md:p-10">
      <SearchInput defaultValue={search} />
      {moviesList.results && moviesList.results.length > 0 ? (
        <MoviesList moviesList={moviesList} page={page} />
      ) : (
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-8">
          <i
            className="icon-[tabler--movie-off] text-4xl text-gray-400 mb-2 block"
            aria-hidden="true"
          />
          No se encontraron películas. Intenta realizar otra búsqueda.
        </p>
      )}
    </main>
  );
}
