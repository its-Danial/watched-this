// Note: Popular content / Movie and TV show

export interface PopularAndTrendingResult {
  page: number;
  results: Movie[] | TV_Show[];
  total_pages: number;
  total_results: number;
}

export interface TV_Show {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: OriginalLanguage;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType;
}

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType;
};

export enum OriginalLanguage {
  En = "en",
  Ko = "ko",
  Pt = "pt",
  Tl = "tl",
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}
