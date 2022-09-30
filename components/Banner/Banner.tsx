import { FC } from "react";
import SearchBar from "./SearchBar";

type BannerProps = {};

const Banner: FC<BannerProps> = (props) => {
  return (
    <div className="min-h-[300px] h-[calc(100vh/2.5)] max-h-[360px] bg-banner bg-cover bg-no-repeat py-5 flex justify-center items-center content-center">
      <div className="w-full flex flex-col gap-10 p-10">
        <div className="">
          <h2 className="text-gray-50 font-extrabold text-5xl">Welcome.</h2>
          <h3 className="text-gray-100 font-semibold text-3xl leading-1">
            Millions of movies and TV shows to discover and track. Explore now.
          </h3>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Banner;
