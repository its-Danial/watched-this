import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";
import { PopularResult } from "../types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [popularContent, setPopularContent] = useState(props.popularContent.popularTvShows.results);
  const [sectionToggle, setSectionToggle] = useState({ popular: "On TV", trending: "Today" });

  const onPopularToggleHandler = (pickedOptionTitle: string) => {
    // setPopularTogglePick(pickedOptionTitle);
    if (pickedOptionTitle === "On TV") {
      setPopularContent(props.popularContent.popularTvShows.results);
    } else {
      setPopularContent(props.popularContent.popularMovies.results);
    }
    // console.log(pickedOptionTitle);
  };
  const onTrendingToggleHandler = (pickedOptionTitle: string) => {
    console.log(pickedOptionTitle);
  };

  return (
    <main className="mt-16 bg-white min-h-screen">
      <MainContainer>
        <Banner />
        <Section
          sectionTitle="What's Popular"
          optionTitles={["On TV", "Movies"]}
          onToggleSelect={onPopularToggleHandler}
        >
          <ContentList contentList={popularContent} />
        </Section>
        <Section sectionTitle="Trending" optionTitles={["Today", "This Week"]} onToggleSelect={onTrendingToggleHandler}>
          <ContentList contentList={props.popularContent.popularMovies.results} />
        </Section>
      </MainContainer>
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  popularContent: { popularTvShows: PopularResult; popularMovies: PopularResult };
}> = async (ctx) => {
  const { data: popularTvShows }: { data: PopularResult } = await axios.get(
    `${process.env.PUBLIC_BASE_URL}/api/tv/popular`
  );
  const { data: popularMovies }: { data: PopularResult } = await axios.get(
    `${process.env.PUBLIC_BASE_URL}/api/movie/popular`
  );

  return {
    props: {
      popularContent: { popularTvShows, popularMovies },
    },
  };
};
