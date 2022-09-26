import Image from "next/image";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../public/images/logo-no-background.svg";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <nav className="bg-white h-16 dark:bg-slate-900 px-36 py-2 flex items-center">
      <div className="my-auto flex-1 flex flex-row justify-between dark:text-gray-100 text-gray-800 items-center">
        <div className="flex flex-row justify-between items-center">
          <Image src={logo} height={35} width={150} />
          <div className="ml-6 flex flex-row space-x-6 font-bold text-base tracking-tighter">
            <p>Movies</p>
            <p>TV shows</p>
          </div>
        </div>
        <div>
          <FaSearch size={23} />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
