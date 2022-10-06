import { FC } from "react";
import Image from "next/image";
import { TvReviews } from "../../../types/TvShowDetails";

type DetailsSocialSectionProps = {
  reviews: TvReviews;
  tvShowName: string;
};

const DetailsSocialSection: FC<DetailsSocialSectionProps> = ({ reviews, tvShowName }) => {
  return (
    <section className="py-[30px] border-t border-gray-300">
      <div className="flex items-baseline">
        <h1 className="font-semibold text-[1.4em] mb-5 mr-[50px]">Social</h1>
        <span className="text-[1.1em] font-semibold mr-6 pb-[5px] border-b-4 border-black cursor-pointer hover:opacity-70">
          Review 1
        </span>
        <span className="text-[1.1em] font-semibold pb-[5px] cursor-pointer hover:opacity-70">Discussion</span>
      </div>
      {reviews.results.length === 0 ? (
        <p className="text-gray-600">We don&apos;t have any reviews for {tvShowName}</p>
      ) : (
        <div className="w-full">
          <div
            className="w-full rounded-lg p-5 border border-gray-100"
            style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}
          >
            <div className="flex w-full items-center content-center">
              <div className="w-16 h-16 mr-5">
                {reviews.results.at(0)?.author_details.avatar_path ? (
                  <Image
                    height={64}
                    width={64}
                    layout="fixed"
                    src={`http://image.tmdb.org/t/p/w128_and_h128_face${
                      reviews.results.at(0)?.author_details.avatar_path
                    }`}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-sky-500 flex justify-center items-center">
                    <span className="font-bold text-3xl text-white">{reviews.results.at(0)?.author.slice(0, 1)}</span>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col">
                <div className="flex">
                  <h3 className="font-bold text-xl">A review by {reviews.results.at(0)?.author}</h3>
                  <div className="px-3 ml-[14px] text-[0.9em] inline-flex justify-center items-center content-center bg-black  text-white rounded-lg border-0 scale-[0.85]">
                    <span className="top-0 left-0 w-[1em] h-[1em] bg-[url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-67a24f6d4324aa644c594653e762b1c0de2b3e1ce0852171cfa49cc2650de374.svg')] invert mr-[2px]"></span>
                    {reviews.results.at(0)?.author_details.rating
                      ? reviews.results.at(0)?.author_details.rating
                      : "NaN"}
                  </div>
                </div>
                <h5 className="text-[0.9em] font-light m-0 text-gray-400">
                  Written by <span className="text-black">{reviews.results.at(0)?.author}</span> on {/* @ts-ignore */}
                  {new Date(reviews.results.at(0)?.created_at).toDateString()}
                </h5>
              </div>
            </div>
            <div className="pl-[84px] pt-[20px] text-ellipsis ">
              {reviews.results.at(0)?.content.slice(0, 601) + "..."}
            </div>
          </div>
        </div>
      )}
      <button className="mt-5 text-black text-base font-semibold hover:opacity-70">Full Cast & Crew</button>
    </section>
  );
};
export default DetailsSocialSection;
