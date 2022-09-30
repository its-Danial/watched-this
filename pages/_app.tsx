import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/Layouts/Nav/NavBar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
