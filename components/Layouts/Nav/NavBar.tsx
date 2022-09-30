import Image from "next/image";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import logo from "../../../public/images/logo-no-background.svg";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-white h-16 dark:bg-tmdbDarkBlue px-36 py-2 flex items-center shadow">
      <div className="my-auto flex-1 flex flex-row justify-between dark:text-gray-100 text-gray-800 items-center">
        <div className="flex flex-row justify-between items-center">
          <Image src={logo} height={35} width={150} alt="logo" />
          <div className="ml-6 flex flex-row space-x-6 font-bold text-base tracking-tighter">
            <p>Movies</p>
            <p>TV shows</p>
          </div>
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

export function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
