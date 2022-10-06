import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import MainContainer from "../../../components/Layouts/Container/MainContainer";
import DetailsCreditCastSection from "../../../components/Layouts/Section/DetailsCreditCastSection";
import DetailsMediaSection from "../../../components/Layouts/Section/DetailsMediaSection";
import DetailsSeason from "../../../components/Layouts/Section/DetailsSeason";
import DetailsSocialSection from "../../../components/Layouts/Section/DetailsSocialSection";

import {
  TvCastCredit,
  TvDetailsImages,
  TvDetailsVideo,
  TvKeywords,
  TvReviews,
  TvShowDetails,
} from "../../../types/TvShowDetails";
import axiosClient from "../../../utils/axiosClient";

const TVDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
  reviews,
  videos,
  images,
}) => {
  return (
    <>
      <Head>
        <title>{`${details.name} (${details.first_air_date.slice(0, 4)})`} </title>
        <meta name="description" content={details.overview} />
      </Head>

      <main className="mt-16 bg-white min-h-screen">
        <DetailsHeader details={details} />
        <MainContainer>
          <div className="flex mt-[30px]">
            <div className="w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] pr-[30px] ">
              <DetailsCreditCastSection creditsCast={creditsCast} title="Series Cast" />

              <DetailsSeason details={details} />

              <DetailsSocialSection reviews={reviews} tvShowName={details.name} />

              <DetailsMediaSection videos={videos} />
            </div>

            <div className="w-[260px] flex flex-col bg-red-700">
              <h1>facts</h1>
            </div>
          </div>
        </MainContainer>
      </main>
    </>
  );
};
export default TVDetailPage;

export const getServerSideProps: GetServerSideProps<{
  details: TvShowDetails;
  creditsCast: TvCastCredit;
  keywords: TvKeywords;
  reviews: TvReviews;
  videos: TvDetailsVideo;
  images: TvDetailsImages;
}> = async (ctx) => {
  const { tv_id } = ctx.query;

  const { data: details } = await axiosClient.get(`/tv/${tv_id}`);
  const { data: creditsCast } = await axiosClient.get(`/tv/${tv_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/tv/${tv_id}/keywords`);
  const { data: reviews } = await axiosClient.get(`/tv/${tv_id}/reviews`);
  const { data: videos } = await axiosClient.get(`/tv/${tv_id}/videos`);
  const { data: images } = await axiosClient.get(`/tv/${tv_id}/images`);

  return {
    props: {
      details,
      creditsCast,
      keywords,
      reviews,
      videos,
      images,
    },
  };
};
