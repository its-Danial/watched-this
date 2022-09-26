import { FC } from "react";
import SearchBar from "./SearchBar";

type BannerProps = {};

const Banner: FC<BannerProps> = (props) => {
  return (
    <div className="min-h-[300px] h-[300px] max-h-[360px] bg-banner bg-cover bg-no-repeat py-5">
      <div className="flex flex-col gap-10 p-10">
        <div className="">
          <h2 className="text-gray-100 font-extrabold text-5xl mb-1">Welcome.</h2>
          <h3 className="text-gray-200 font-semibold text-[1.8rem] leading-1">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Banner;
