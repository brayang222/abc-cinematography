export interface Movies {
  adult: boolean;
  results: [Movie];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: ProductionCompanies[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface Company {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCompanies {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  id: number;
  results: Video[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
