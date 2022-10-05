import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DetailsHeader from "../../../components/Details/DetailsHeader";

import MainContainer from "../../../components/Layouts/Container/MainContainer";
import CreditCastSection from "../../../components/Layouts/Section/CreditCastSection";
import { Keywords, TvCastCredit, TvReviews, TvShowDetails } from "../../../types/TvShowDetails";

import axiosClient from "../../../utils/axiosClient";

const TVDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
  reviews,
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
              <section className="relative pb-[30px]">
                <CreditCastSection creditsCast={creditsCast} title="Series Cast" />
                <button className="mt-5 text-black text-base font-semibold hover:opacity-70">Full Cast & Crew</button>
              </section>

              <section className="py-[30px] border-t border-gray-300">
                <h1 className="font-semibold text-[1.4em] mb-5">Current Season</h1>
                <div
                  className="border border-gray-100 rounded-lg overflow-hidden flex"
                  style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}
                >
                  <Image
                    width={130}
                    height={195}
                    layout="fixed"
                    src={`https://image.tmdb.org/t/p/w260_and_h390_bestv2${details.seasons.at(-1)?.poster_path}`}
                    alt={`${details.name} poster`}
                  />

                  <div className="w-full p-5 flex flex-col justify-center">
                    <div>
                      <h2 className="text-2xl font-semibold">{details.seasons.at(-1)?.name}</h2>
                      <h4 className="mb-2 font-bold">
                        {details.seasons.at(-1)?.air_date.slice(0, 4)} | {details.seasons.at(-1)?.episode_count}{" "}
                        Episodes
                      </h4>
                      <div className="pt-5">
                        <p className="font-thin text-gray-600 leading-[1.4]">{details.seasons.at(-1)?.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-5 text-black text-base font-semibold hover:opacity-70">View all season</button>
              </section>

              <section className="py-[30px] border-t border-gray-300">
                <div className="flex items-baseline">
                  <h1 className="font-semibold text-[1.4em] mb-5 mr-[50px]">Media</h1>
                  <span className="text-[1.1em] font-semibold mr-6 pb-[5px] border-b-4 border-black cursor-pointer hover:opacity-70">
                    Review 1
                  </span>
                  <span className="text-[1.1em] font-semibold pb-[5px] cursor-pointer hover:opacity-70">
                    Discussion
                  </span>
                </div>
                <div className="w-full">
                  <div
                    className="w-full rounded-lg p-5 border border-gray-100"
                    style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}
                  >
                    <div className="flex w-full items-center content-center">
                      <div className="w-16 h-16 mr-5">
                        <Image
                          height={64}
                          width={64}
                          layout="fixed"
                          src={"https://image.tmdb.org/t/p/w128_and_h128_face/nWKDbbJ36wltQrxWNxMOKcyj79N.jpg"}
                          alt=""
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="w-full flex flex-col">
                        <div className="flex">
                          <h3 className="font-bold text-xl">A review by Adishake</h3>
                          <div className="px-3 ml-[14px] text-[0.9em] inline-flex justify-center items-center content-center bg-black  text-white rounded-lg border-0 scale-[0.85]">
                            <span className="top-0 left-0 w-[1em] h-[1em] bg-[url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-67a24f6d4324aa644c594653e762b1c0de2b3e1ce0852171cfa49cc2650de374.svg')] invert mr-[2px]"></span>
                            9.0
                          </div>
                        </div>
                        <h5 className="text-[0.9em] font-light m-0 text-gray-400">
                          Written by <span className="text-black">Adishake</span> on 23 October 2020
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
  keywords: Keywords;
  reviews: TvReviews;
}> = async (ctx) => {
  const { tv_id } = ctx.query;

  const { data: details } = await axiosClient.get(`/tv/${tv_id}`);
  const { data: creditsCast } = await axiosClient.get(`/tv/${tv_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/tv/${tv_id}/keywords`);
  const { data: reviews } = await axiosClient.get(`/tv/${tv_id}/reviews`);

  return {
    props: {
      details,
      creditsCast,
      keywords,
      reviews,
    },
  };
};
