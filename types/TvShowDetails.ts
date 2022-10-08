export interface TvShowDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: any[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TEpisodeToAir;
  name: string;
  next_episode_to_air: TEpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface TEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  id: number;
  name: string;
  logo_path: null | string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TvCastCredit {
  cast: Cast[];
  crew: Cast[];
  id: number;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

export interface TvKeywords {
  id: number;
  results: Keyword[];
}

export interface Keyword {
  name: string;
  id: number;
}

export interface TvReviews {
  id: number;
  page: number;
  results: TvReviewsResult[];
  total_pages: number;
  total_results: number;
}

export interface TvReviewsResult {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface TvDetailsVideo {
  id: number;
  results: TvDetailsVideoResult[];
}

export interface TvDetailsVideoResult {
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

export interface TvDetailsImages {
  backdrops: TvDetailsImage[];
  id: number;
  logos: TvDetailsImage[];
  posters: TvDetailsImage[];
}

export interface TvDetailsImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TvRecommendations {
  page: number;
  results: TvRecommendationsResult[];
  total_pages: number;
  total_results: number;
}

export interface TvRecommendationsResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: OriginalLanguage;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: OriginCountry[];
}

export enum MediaType {
  Tv = "tv",
}

export enum OriginCountry {
  Au = "AU",
  GB = "GB",
  Jp = "JP",
  Us = "US",
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
}
