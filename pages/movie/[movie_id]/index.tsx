import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import MainContainer from "../../../components/Layouts/Container/MainContainer";
import CreditCastSection from "../../../components/Layouts/Section/DetailsCreditCastSection";
import {
  MovieDetails,
  MovieKeywords,
  MovieCreditCast,
  MovieDetailsVideos,
  MovieDetailsReviews,
  MovieDetailsImages,
  MovieDetailsRecommendations,
} from "../../../types/MovieDetails";

import axiosClient from "../../../utils/axiosClient";
import DetailsCreditCastSection from "../../../components/Layouts/Section/DetailsCreditCastSection";
import DetailsSeason from "../../../components/Layouts/Section/DetailsSeason";
import DetailsSocialSection from "../../../components/Layouts/Section/DetailsSocialSection";
import DetailsMediaSection from "../../../components/Layouts/Section/DetailsMediaSection";
import DetailsRecommendationSection from "../../../components/Layouts/Section/DetailsRecommendationSection";
import DetailsFactSection from "../../../components/Layouts/Section/DetailsFactSection";

const MovieDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
  reviews,
  videos,
  images,
  recommendations,
}) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>{`${details.title} (${details.release_date.slice(0, 4)})`} </title>
        <meta name="description" content={details.overview} />
      </Head>

      <main className="mt-16 bg-white min-h-screen">
        <DetailsHeader details={details} />
        <MainContainer>
          <div className="flex mt-[30px]">
            <div className="w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] pr-[30px]">
              <DetailsCreditCastSection creditsCast={creditsCast} title="Top Billed Cast" />

              <DetailsSocialSection contentType="movie" reviews={reviews} title={details.title} />

              <DetailsMediaSection videos={videos} images={images} />

              <DetailsRecommendationSection title={details.title} recommendations={recommendations} />
            </div>

            <div className="w-[260px] flex flex-col">
              <DetailsFactSection contentType="movie" keywords={keywords} details={details} />
            </div>
          </div>
        </MainContainer>
      </main>
    </motion.div>
  );
};
export default MovieDetailPage;

export const getServerSideProps: GetServerSideProps<{
  details: MovieDetails;
  creditsCast: MovieCreditCast;
  keywords: MovieKeywords;
  reviews: MovieDetailsReviews;
  videos: MovieDetailsVideos;
  images: MovieDetailsImages;
  recommendations: MovieDetailsRecommendations;
}> = async (ctx) => {
  const { movie_id } = ctx.query;

  const { data: details } = await axiosClient.get(`/movie/${movie_id}`);
  const { data: creditsCast } = await axiosClient.get(`/movie/${movie_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/movie/${movie_id}/keywords`);
  const { data: reviews } = await axiosClient.get(`/movie/${movie_id}/reviews`);
  const { data: videos } = await axiosClient.get(`/movie/${movie_id}/videos`);
  const { data: images } = await axiosClient.get(`/movie/${movie_id}/images`);
  const { data: recommendations } = await axiosClient.get(`/movie/${movie_id}/recommendations`);

  return {
    props: {
      details,
      creditsCast,
      keywords,
      reviews,
      videos,
      images,
      recommendations,
    },
  };
};
