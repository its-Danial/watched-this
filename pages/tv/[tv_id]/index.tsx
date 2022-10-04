import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import MainContainer from "../../../components/Layouts/Container/MainContainer";
import CreditCastSection from "../../../components/Layouts/Section/CreditCastSection";
import { Keywords, TvCastCredit, TvShowDetails } from "../../../types/TvShowDetails";
import axiosClient from "../../../utils/axiosClient";

const TVDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
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
            <div className="w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] flex flex-wrap pr-[30px]">
              <CreditCastSection creditsCast={creditsCast} title="Series Cast" />
            </div>

            <div className="min-w-[260px] w-[260px] flex flex-wrap">
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
  keywords: Keywords;
}> = async (ctx) => {
  const { tv_id } = ctx.query;

  const { data: details } = await axiosClient.get(`/tv/${tv_id}`);
  const { data: creditsCast } = await axiosClient.get(`/tv/${tv_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/tv/${tv_id}/keywords`);

  return {
    props: {
      details,
      creditsCast,
      keywords,
    },
  };
};
