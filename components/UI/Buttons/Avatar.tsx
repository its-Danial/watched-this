import { FC, useRef, useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOut } from "next-auth/react";
import useOutSideClickHandler from "../../../hooks/useOutSideClickHandler";

type AvatarProps = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

const Avatar: FC<AvatarProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  useOutSideClickHandler(cardContainerRef, () => setShowMenu(false));

  const avatarClickHandler = () => {
    setShowMenu(true);
  };

  return (
    <div ref={cardContainerRef} onClick={avatarClickHandler} className="relative group">
      <div className="cursor-pointer overflow-hidden relative w-9 h-9 bg-gray-100 rounded-full dark:bg-gray-600">
        {props.image ? (
          <img src={props.image} alt="userPicture" />
        ) : (
          <svg
            className="absolute -left-1 w-11 h-11 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        )}
      </div>
      <div className="group-hover:block hidden absolute w-28 text-center -bottom-12 -left-10 bg-white border border-gray-300 text-gray-500 p-1 rounded-md shadow-md">
        <div className="relative">
          <BsFillTriangleFill className="absolute -top-3 left-[43%] text-white" />
          <h4 className="text-base">Profile Options</h4>
        </div>
      </div>
      {showMenu && (
        <div className="absolute w-40 top-12 -left-14 bg-white text-tmdbDarkBlue text-sm border border-gray-300 rounded-md shadow-md">
          <div className="relative">
            <BsFillTriangleFill className="absolute -top-2 left-[41%] text-white" />
            <div className="flex flex-col py-1 ">
              <div className="p-4 pl-4 flex flex-col  cursor-pointer border-b border-gray-300">
                <h2 className="text-lg">{props.name}</h2>
                <p className="text-[13px] font-extralight text-slate-400">view profile</p>
              </div>
              <div className="p-2 pl-4 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer">
                <span>Favorits</span>
              </div>
              <div className=" p-2 pl-4 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer ">
                <span>Watchlist</span>
              </div>
              <div className="p-2 pl-4 hover:bg-tmdbDarkBlue hover:text-white cursor-pointer border-b border-gray-300">
                <span>Progress and History</span>
              </div>
              <div
                onClick={() => signOut()}
                className="p-2 pl-4 w-full hover:bg-tmdbDarkBlue hover:text-white cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span>Sign out</span>
                  <RiLogoutCircleRLine size={15} className="mr-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Avatar;
