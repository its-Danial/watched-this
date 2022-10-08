export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieCreditCast {
  id: number;
  cast: Cast[];
  crew: Cast[];
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
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

export interface MovieKeywords {
  id: number;
  keywords: Keyword[];
}

export interface Keyword {
  id: number;
  name: string;
}

export interface MovieDetailsReviews {
  id: number;
  page: number;
  results: MovieReviewsResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieReviewsResult {
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
  avatar_path: null | string;
  rating: number | null;
}

export interface MovieDetailsVideos {
  id: number;
  results: MovieDetailsVideos[];
}

export interface MovieDetailsVideosResult {
  iso_639_1: ISO639_1;
  iso_3166_1: ISO3166_1;
  name: string;
  key: string;
  site: Site;
  size: number;
  type: Type;
  official: boolean;
  published_at: string;
  id: string;
}

export enum ISO3166_1 {
  Us = "US",
}

export enum ISO639_1 {
  En = "en",
}

export enum Site {
  YouTube = "YouTube",
}

export enum Type {
  BehindTheScenes = "Behind the Scenes",
  Bloopers = "Bloopers",
  Clip = "Clip",
  Featurette = "Featurette",
  Teaser = "Teaser",
  Trailer = "Trailer",
}

export interface MovieDetailsImages {
  backdrops: MovieImage[];
  id: number;
  logos: MovieImage[];
  posters: MovieImage[];
}

export interface MovieImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieDetailsRecommendations {
  page: number;
  results: MovieDetailsRecommendationsResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetailsRecommendationsResult {
  adult: boolean;
  backdrop_path: null | string;
  id: number;
  title: string;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MediaType {
  Movie = "movie",
}

export enum OriginalLanguage {
  Am = "am",
  En = "en",
}
