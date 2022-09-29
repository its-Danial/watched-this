import Image from "next/image";
import { FC } from "react";
import { Movie, TV_Show } from "../../../types";

type HomeContentCardProps = {
  contentItem: Movie | TV_Show;
};

const HomeContentCard: FC<HomeContentCardProps> = ({ contentItem }) => {
  return (
    <div className="flex flex-col gap-2 pl-5 ">
      {/* <div className="w-[15px] h-[225px] shadow-sm rounded-lg overflow-hidden"> */}
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${contentItem.poster_path}`}
        alt=""
        // height={225}
        // width={150}
        className="shadow-sm rounded-lg w-[150px] h-[225px] shadow-sm"
      />
      {/* </div> */}
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{contentItem.name || contentItem.title}</h1>
        <h3 className="font-normal text-sm leading-tight text-slate-500">
          {contentItem.first_air_date || contentItem.release_date}
        </h3>
      </div>
    </div>
  );
};
export default HomeContentCard;
