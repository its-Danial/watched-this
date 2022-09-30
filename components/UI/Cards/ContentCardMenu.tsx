import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiTimeFill } from "react-icons/ri";

type ContentCardMenuProps = {};

const ContentCardMenu: FC<ContentCardMenuProps> = (props) => {
  return (
    <div
      className={`absolute top-10 -right-5 bg-white text-tmdbDarkBlue border border-gray-300 rounded-md shadow-md z-20`}
    >
      <div className="flex flex-col justify-center py-1">
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer border-b border-gray-300">
          <AiFillHeart />
          <span>Mark as Favorite</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer border-b border-gray-300">
          <BsFillBookmarkFill />
          <span>Add to Watchlist</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer ">
          <RiTimeFill />
          <span>Add to History</span>
        </div>
      </div>
    </div>
  );
};
export default ContentCardMenu;
