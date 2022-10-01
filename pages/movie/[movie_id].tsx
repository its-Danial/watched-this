import { useRouter } from "next/router";
import { FC } from "react";

type MovieDetailPageProps = {};

const MovieDetailPage: FC<MovieDetailPageProps> = (props) => {
  const router = useRouter();
  const { movie_id } = router.query;
  return <h1 className="text-white mt-48 text-4xl">movie: {movie_id}</h1>;
};
export default MovieDetailPage;
