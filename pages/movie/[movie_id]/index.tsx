import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import MainContainer from "../../../components/Layouts/Container/MainContainer";
import CreditCastSection from "../../../components/Layouts/Section/DetailsCreditCastSection";
import { MovieDetails, MovieKeywords, MovieCreditCast } from "../../../types/MovieDetails";

import axiosClient from "../../../utils/axiosClient";

const MovieDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{`${details.title} (${details.release_date.slice(0, 4)})`} </title>
        <meta name="description" content={details.overview} />
      </Head>
      <main className="mt-16 bg-white min-h-screen">
        <DetailsHeader details={details} creditsCast={creditsCast} />
        <MainContainer>
          <div className="flex mt-[30px]">
            <div className="w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] flex flex-col pr-[30px]">
              <CreditCastSection creditsCast={creditsCast} title="Top Billed Cast" />
            </div>

            <div className="w-[260px] flex flex-col bg-black">
              <h1 className="">Facts</h1>
            </div>
          </div>
        </MainContainer>
      </main>
    </>
  );
};
export default MovieDetailPage;

export const getServerSideProps: GetServerSideProps<{
  details: MovieDetails;
  creditsCast: MovieCreditCast;
  keywords: MovieKeywords;
}> = async (ctx) => {
  const { movie_id } = ctx.query;

  const { data: details } = await axiosClient.get(`/movie/${movie_id}`);
  const { data: creditsCast } = await axiosClient.get(`/movie/${movie_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/movie/${movie_id}/keywords`);
  return {
    props: {
      details,
      creditsCast,
      keywords,
    },
  };
};
