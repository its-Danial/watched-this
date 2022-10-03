import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import { MovieDetails } from "../../../types/MovieDetails";
import { TvCastCredit, Keywords } from "../../../types/TvShowDetails";
import axiosClient from "../../../utils/axiosClient";

type MovieDetailPageProps = {};

const MovieDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
}) => {
  return (
    <main className="mt-16 bg-white min-h-screen">
      <DetailsHeader details={details} creditsCast={creditsCast} />
    </main>
  );
};
export default MovieDetailPage;

export const getServerSideProps: GetServerSideProps<{
  details: MovieDetails;
  creditsCast: TvCastCredit;
  keywords: Keywords;
}> = async (ctx) => {
  const { movie_id } = ctx.query;

  const { data } = await axiosClient.get(`${process.env.PUBLIC_BASE_URL}/api/movie/${movie_id}/details`);

  const { details, creditsCast, keywords } = data;
  return {
    props: {
      details,
      creditsCast,
      keywords,
    },
  };
};
