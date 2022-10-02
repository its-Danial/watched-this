import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import axiosClient from "../../../utils/axiosClient";
import { TvShowDetails } from "../../../types/TvShowDetails";
import DetailsBanner from "../../../components/Banner/DetailsBanner";
import MainContainer from "../../../components/Layouts/Container/MainContainer";
import Image from "next/image";
import ProgressCircle from "../../../components/UI/Progress/ProgressCircle";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsFillPlayFill } from "react-icons/bs";
import { RiTimeFill } from "react-icons/ri";

const TVDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ details }) => {
  return (
    <main className="mt-16 bg-white min-h-screen">
      <DetailsBanner backdropUrl={details.backdrop_path}>
        <div className="py-[30px] px-[40px] w-full">
          <MainContainer>
            <div className="flex ">
              <div className="w-[300px] h-[450px] min-w-[300px] overflow-hidden rounded-lg">
                <Image
                  width={300}
                  height={450}
                  objectFit="cover"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${details.poster_path}`}
                  alt={`${details.name} poster`}
                />
              </div>
              <div className="pl-[40px] flex flex-wrap items-center content-center w-full text-white">
                <div className="mb-6 space-y-1 w-full">
                  <h1 className="font-semibold flex w-full text-4xl">
                    {details.name}
                    <span className="ml-3 opacity-80 font-light">({details.first_air_date.slice(0, 4)})</span>
                  </h1>
                  <div className="w-full flex space-x-2">
                    <span className="border border-solid border-zinc-400 text-zinc-400 text-sm px-1">TV-MA</span>
                    {details.genres.map((genre) => (
                      <span key={genre.id} className="text-sm font-light">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[64px] mb-5 flex items-center justify-start gap-5">
                  <div className="flex items-center">
                    <div className="h-[60px] w-[60px]">
                      <ProgressCircle size="lg" percentage={details.vote_average * 10} />
                    </div>
                    <div className="font-bold  ml-[6px] tracking-tighter leading-5">
                      User <br />
                      Score
                    </div>
                  </div>
                  <div className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue hover:opacity-80 flex items-center justify-center content-center cursor-pointer shadow">
                    <AiFillHeart />
                  </div>
                  <div className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue hover:opacity-80 flex items-center justify-center content-center cursor-pointer shadow">
                    <BsFillBookmarkFill />
                  </div>
                  <div className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue hover:opacity-80 flex items-center justify-center content-center cursor-pointer shadow">
                    <RiTimeFill />
                  </div>
                  <button className="flex items-center gap-2 hover:opacity-60">
                    <BsFillPlayFill size={25} />
                    <span className="font-semibold">Play Trailer</span>
                  </button>
                </div>
                <div className="w-full">
                  <h3 className="font-normal text-[1.1em] italic opacity-70 mb-[10px]">{details.tagline}</h3>
                  <h3 className="font-semibold text-xl  mb-[10px]">Overview</h3>
                  <p className="text-base font-thin opacity-95 mb-5">{details.overview}</p>
                  <ol className="flex flex-wrap justify-start list-none list-inside m-0 p-0">
                    {details.created_by.map((creator) => (
                      <li key={creator.id} className="pr-5 text-left min-w-[140px] w-1/3 basis-1/3">
                        <p className="text-[1em] font-semibold overflow-hidden">{creator.name}</p>
                        <p className="text-sm overflow-hidden opacity-90">Creator</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </MainContainer>
        </div>
      </DetailsBanner>
    </main>
  );
};
export default TVDetailPage;

export const getServerSideProps: GetServerSideProps<{ details: TvShowDetails }> = async (ctx) => {
  const { tv_id } = ctx.query;

  const { data } = await axiosClient.get(`/tv/${tv_id}`);

  return {
    props: {
      details: data,
    },
  };
};
