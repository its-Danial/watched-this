import { FC } from "react";
import Image from "next/image";
import DetailsBanner from "../Banner/DetailsBanner";
import MainContainer from "../Layouts/Container/MainContainer";
import { TvShowDetails } from "../../types/TvShowDetails";
import ProgressCircle from "../UI/Progress/ProgressCircle";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsFillPlayFill } from "react-icons/bs";
import { RiTimeFill } from "react-icons/ri";
import { MovieCreditCast, MovieDetails } from "../../types/MovieDetails";

type DetailsHeaderProps = {
  details: TvShowDetails | MovieDetails;
  creditsCast?: MovieCreditCast;
};

const DetailsHeader: FC<DetailsHeaderProps> = ({ details, creditsCast }) => {
  const getPeople = () => {
    if (creditsCast) {
      const temp = creditsCast.crew.filter(
        (crew) => crew.job && ["Director", "Screenplay", "Writer", "Novel"].includes(crew.job)
      );
      const uniqueArray = temp.filter((value, index) => {
        return (
          index ===
          temp.findIndex((obj) => {
            return obj.name === value.name;
          })
        );
      });
      return uniqueArray;
    }
  };

  return (
    <DetailsBanner backdropUrl={details.backdrop_path || details.poster_path}>
      <div className="py-[30px] px-[40px] w-full">
        <MainContainer>
          <div className="flex">
            <div className="w-[300px] h-[450px] min-w-[300px] overflow-hidden rounded-lg">
              <Image
                width={300}
                height={450}
                priority={true}
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                  details.poster_path ? details.poster_path : details.backdrop_path
                }`}
                // @ts-ignore
                alt={`${details.name || details.title} poster`}
              />
            </div>
            <div className="pl-[40px] flex flex-wrap items-center content-center w-full text-white">
              <div className="mb-6 space-y-1 w-full">
                <h1 className="font-semibold flex w-full text-4xl">
                  {/* @ts-ignore */}
                  {details.name || details.title}
                  <span className="ml-3 opacity-80 font-light">
                    ( {/* @ts-ignore */}
                    {details.first_air_date ? details.first_air_date.slice(0, 4) : details.release_date.slice(0, 4)})
                  </span>
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
                  {/* @ts-ignore */}
                  {details.created_by
                    ? // @ts-ignore
                      details.created_by.map((creator) => (
                        <li key={creator.id} className="pr-5 text-left min-w-[140px] w-1/3 basis-1/3">
                          <p className="text-[1em] font-semibold overflow-hidden">{creator.name}</p>
                          <p className="text-sm overflow-hidden opacity-90">Creator</p>
                        </li>
                      ))
                    : getPeople()?.map((creator) => (
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
  );
};
export default DetailsHeader;
