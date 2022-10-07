import Image from "next/image";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import useOutSideClickHandler from "../../../hooks/useOutSideClickHandler";
import { Movie, TV_Show } from "../../../types/PopularAndTrendingResult";
import ProgressCircle from "../Progress/ProgressCircle";
import ContentCardMenu from "./ContentCardMenu";

type HomeContentCardProps = {
  contentItem: Movie | TV_Show;
  isLoading?: boolean;
  displayContentType: "tv" | "all" | "movie" | undefined;
};

const HomeContentCard: FC<HomeContentCardProps> = ({ contentItem, isLoading, displayContentType }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const onMenuClickHandler = () => {
    setShowDropdown(!showDropdown);
  };
  // Note: To close menu if clicked anywhere else
  useOutSideClickHandler(cardContainerRef, () => setShowDropdown(false));

  return (
    <div ref={cardContainerRef} onClick={() => console.log(displayContentType)} className="relative">
      <div
        className={`flex flex-col gap-2 pl-5 transition-opacity ${showDropdown && "blur-sm pointer-events-none"} ${
          isLoading ? "opacity-10" : "opacity-100"
        }`}
      >
        <div className={`relative`}>
          <Link href={`${displayContentType}/${contentItem.id}`}>
            <a>
              <div className="rounded-lg w-[150px] h-[225px] overflow-hidden shadow">
                <Image
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face/${contentItem.poster_path}`}
                  // @ts-ignore
                  alt={contentItem.name || contentItem.title}
                  height={225}
                  width={150}
                  layout="fixed"
                  className="rounded-lg"
                />
              </div>
            </a>
          </Link>
          <div className="absolute left-2 -bottom-5 cursor-default h-[38px] w-[38px]">
            <ProgressCircle size="sm" percentage={contentItem.vote_average * 10} />
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
            {/* @ts-ignore */}
            {contentItem.name || contentItem.title}
          </h1>
          <h3 className="font-normal text-sm leading-tight text-slate-500">
            {/* @ts-ignore */}
            {contentItem.first_air_date || contentItem.release_date}
          </h3>
        </div>
      </div>

      {/* Note: menu */}
      {showDropdown && <ContentCardMenu />}
    </div>
  );
};
export default HomeContentCard;
