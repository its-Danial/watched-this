import axios from "axios";
import { InferGetServerSidePropsType, NextPage, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";
import { PopularAndTrendingResult } from "../types";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const [sectionToggle, setSectionToggle] = useState({ popular: "On TV", trending: "Today" });
  const [trendingContent, setTrendingContent] = useState(props.trendingContent);
  const [trendingTimeWindow, setTrendingTimeWindow] = useState("all");
  const [isLoading, setIsLoading] = useState<boolean>();

  const onSectionToggleHandler = (sectionName: string, selectedOption: string) => {
    setSectionToggle((prevState) => ({ ...prevState, [sectionName]: selectedOption }));
  };

  const trendingTimeSelectHandler = (timeWindow: string) => {
    setTrendingTimeWindow(timeWindow);
  };
  useEffect(() => {
    console.log(`/api/trending/${trendingTimeWindow}/${sectionToggle.trending === "Today" ? "day" : "week"}`);

    const fetchFreshTrendingContent = async () => {
      setIsLoading(true);
      const { data: trendingData }: { data: PopularAndTrendingResult } = await axios.get(
        `/api/trending/${trendingTimeWindow}/${sectionToggle.trending === "Today" ? "day" : "week"}`
      );
      setTrendingContent(trendingData);
      setIsLoading(false);
    };
    fetchFreshTrendingContent();
  }, [sectionToggle.trending, trendingTimeWindow]);

  return (
    <main className="mt-16 bg-white min-h-screen">
      <MainContainer>
        <Banner />
        <Section
          sectionTitle="What's Popular"
          optionItems={["On TV", "Movies"]}
          onToggleSelect={onSectionToggleHandler.bind(null, "popular")}
          isToggled={sectionToggle.popular === "On TV" ? false : true}
        >
          <ContentList
            listContent={
              sectionToggle.popular === "On TV"
                ? props.popularContent.popularTvShows.results
                : props.popularContent.popularMovies.results
            }
          />
        </Section>
        {/* Note Trending Section */}
        <Section
          sectionTitle="Trending"
          optionItems={["Today", "This Week"]}
          onTimeWindowSelect={trendingTimeSelectHandler}
          onToggleSelect={onSectionToggleHandler.bind(null, "trending")}
          isToggled={sectionToggle.trending === "Today" ? false : true}
        >
          <ContentList isLoading={isLoading} listContent={trendingContent.results} />
        </Section>
      </MainContainer>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: popularTvShows }: { data: PopularAndTrendingResult } = await axios.get(
    `${process.env.PUBLIC_BASE_URL}/api/tv/popular`
  );
  const { data: popularMovies }: { data: PopularAndTrendingResult } = await axios.get(
    `${process.env.PUBLIC_BASE_URL}/api/movie/popular`
  );
  const { data: allTrendingToday }: { data: PopularAndTrendingResult } = await axios.get(
    `${process.env.PUBLIC_BASE_URL}/api/trending/all/day`
  );

  return {
    props: {
      popularContent: { popularTvShows, popularMovies },
      trendingContent: allTrendingToday,
    },
  };
};
