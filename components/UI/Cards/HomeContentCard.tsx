import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { Movie, TV_Show } from "../../../types";
import ProgressCircle from "../Progress/ProgressCircle";
import { HiDotsCircleHorizontal } from "react-icons/hi";

type HomeContentCardProps = {
  contentItem: Movie | TV_Show;
};

const HomeContentCard: FC<HomeContentCardProps> = ({ contentItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const onMenuClickHandler = () => {
    setShowDropdown(!showDropdown);
  };
  // Note: To close menu if clicked anywhere else
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (cardContainerRef.current && !cardContainerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={cardContainerRef} className="relative">
      <div className={`flex flex-col gap-2 pl-5 ${showDropdown && "blur-sm"}`}>
        <div className="relative hover:cursor-pointer">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${contentItem.poster_path}`}
            alt=""
            // height={225}
            // width={150}
            className="shadow-sm rounded-lg w-[150px] h-[225px] shadow-sm"
          />
          <div className="absolute left-2 -bottom-5 cursor-default">
            <ProgressCircle percentage={contentItem.vote_average * 10} />
          </div>
          <div onClick={onMenuClickHandler} className="absolute top-2 right-2 rounded-full hover:cursor-pointer">
            <HiDotsCircleHorizontal
              className="text-slate-200 hover:text-tmdbLightBlue opacity-70 hover:opacity-100"
              size={23}
            />
          </div>
        </div>

        <div className="flex flex-col px-3 pt-5 w-[150px]">
          <h1 className="font-bold hover:cursor-pointer hover:text-tmdbLightBlue">
            {contentItem.name || contentItem.title}
          </h1>
          <h3 className="font-normal text-sm leading-tight text-slate-500">
            {contentItem.first_air_date || contentItem.release_date}
          </h3>
        </div>
      </div>
      {/* Note: menu */}
      <div
        className={`${
          showDropdown ? "block" : "hidden"
        }  absolute pointer-events-auto top-10 -right-5 bg-white h-20 w-20 border border-gray-300 rounded-md shadow-md z-20`}
      ></div>
    </div>
  );
};
export default HomeContentCard;
