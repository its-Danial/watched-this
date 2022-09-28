import Image from "next/image";
import { FC } from "react";

type HomeContentCardProps = {
  name: string;
  poster_path: string;
  first_air_date: string;
};

const HomeContentCard: FC<HomeContentCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-2 pl-5 ">
      {/* <div className="w-[15px] h-[225px] shadow-sm rounded-lg overflow-hidden"> */}
      <Image
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.poster_path}`}
        alt=""
        height={225}
        width={150}
        className="shadow-sm rounded-lg"
      />
      {/* </div> */}
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{props.name}</h1>
        <h3 className="font-normal text-sm leading-tight text-slate-500">{props.first_air_date}</h3>
      </div>
    </div>
  );
};
export default HomeContentCard;
