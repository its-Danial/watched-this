import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import HomeSection from "../components/Layouts/Section/HomeSection";
import { PopularAndTrendingResult } from "../types/PopularAndTrendingResult";
import axiosClient from "../utils/axiosClient";
import { motion } from "framer-motion";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const [sectionToggle, setSectionToggle] = useState({ popular: "On TV", trending: "Today" });
  const [trendingContent, setTrendingContent] = useState(props.trendingContent);
  const [trendingContentType, setTrendingContentType] = useState<"tv" | "all" | "movie">("all");
  const [isLoading, setIsLoading] = useState<boolean>();

  const onSectionToggleHandler = (sectionName: string, selectedOption: string) => {
    setSectionToggle((prevState) => ({ ...prevState, [sectionName]: selectedOption }));
  };

  const trendingContentSelectHandler = (contentType: "tv" | "all" | "movie") => {
    setTrendingContentType(contentType);
  };

  useEffect(() => {
    console.log(`/api/trending/${trendingContentType}/${sectionToggle.trending === "Today" ? "day" : "week"}`);

    const fetchFreshTrendingContent = async () => {
      setIsLoading(true);
      const { data: trendingData }: { data: PopularAndTrendingResult } = await axios.get(
        `/api/trending/${trendingContentType}/${sectionToggle.trending === "Today" ? "day" : "week"}`
      );
      setTrendingContent(trendingData);
      setIsLoading(false);
    };
    fetchFreshTrendingContent();
  }, [sectionToggle.trending, trendingContentType]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Watched This</title>
        <meta name="description" content="A website for tracking and searching tv shows or movies" />
      </Head>
      <main className="mt-16 bg-white min-h-screen">
        <MainContainer>
          <Banner />
          <HomeSection
            sectionTitle="What's Popular"
            optionItems={["On TV", "Movies"]}
            onToggleSelect={onSectionToggleHandler.bind(null, "popular")}
            isToggled={sectionToggle.popular === "On TV" ? false : true}
          >
            <ContentList
              displayContentType={sectionToggle.popular === "On TV" ? "tv" : "movie"}
              listContent={
                sectionToggle.popular === "On TV"
                  ? props.popularContent.popularTvShows.results
                  : props.popularContent.popularMovies.results
              }
            />
          </HomeSection>
          {/* Note Trending Section */}
          <HomeSection
            sectionTitle="Trending"
            optionItems={["Today", "This Week"]}
            onContentTypeSelect={trendingContentSelectHandler}
            onToggleSelect={onSectionToggleHandler.bind(null, "trending")}
            isToggled={sectionToggle.trending === "Today" ? false : true}
          >
            <ContentList
              displayContentType={trendingContentType}
              isLoading={isLoading}
              listContent={trendingContent.results}
            />
          </HomeSection>
        </MainContainer>
      </main>
    </motion.div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: popularTvShows }: { data: PopularAndTrendingResult } = await axiosClient.get(`/tv/popular`);
  const { data: popularMovies }: { data: PopularAndTrendingResult } = await axiosClient.get(`/movie/popular`);
  const { data: allTrendingToday }: { data: PopularAndTrendingResult } = await axiosClient.get(`/trending/all/day`);

  return {
    props: {
      popularContent: { popularTvShows, popularMovies },
      trendingContent: allTrendingToday,
    },
  };
};
