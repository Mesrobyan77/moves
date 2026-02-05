export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name?: string;
  name?: string;
  first_air_date?: string;
  media_type?: string;
}

export interface MovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBResponse {
  results: IMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IMovieCollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ITMDBSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface ITMDBDetails {
  id: number;
  name?: string;
  title?: string;
  original_name?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  seasons?: ITMDBSeason[];
  last_episode_to_air?: {
    episode_number: number;
    season_number: number;
  };
  genres: { id: number; name: string }[];
  overview: string;
  backdrop_path: string;
  vote_average: number;
  first_air_date?: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieCollection {
  id: number;
  name: string;
}

export interface IMovieDetails {
  adult: boolean;
  belongs_to_collection: IMovieCollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  first_air_date?: string;
  original_name?: string;
}
