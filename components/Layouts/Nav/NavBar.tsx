import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../../public/images/logo.png";
import Avatar from "../../UI/Buttons/Avatar";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const { data: session } = useSession();

  console.log(session);

  const authButton = session ? (
    <Avatar {...session.user} />
  ) : (
    <button className="flex items-center gap-3" onClick={() => signIn()}>
      <span className="font-medium text-[1em] text-white">Sign In</span>
      <IoMdLogIn size={18} className="text-tmdbLightGreen" />
    </button>
  );

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-white h-16 dark:bg-tmdbDarkBlue px-36 py-2 flex items-center shadow">
      <div className="my-auto flex-1 flex flex-row justify-between dark:text-gray-100 text-gray-800 items-center">
        <div className="flex flex-row justify-between items-center">
          <Image src={logo} height={35} width={150} alt="logo" />
          <div className="ml-6 flex flex-row space-x-6 font-medium text-[1em] text-white">
            <p>Movies</p>
            <p>TV shows</p>
          </div>
        </div>
        {authButton}
      </div>
    </nav>
  );
};
export default NavBar;
