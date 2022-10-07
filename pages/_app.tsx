import { AnimatePresence } from "framer-motion";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import NavBar from "../components/Layouts/Nav/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextNProgress color="#1ED5A9" />
      <AnimatePresence>
        <NavBar />
        <Component {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  );
}

export default MyApp;
