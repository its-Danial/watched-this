import "../styles/globals.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NavBar from "../components/Layouts/Nav/NavBar";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
