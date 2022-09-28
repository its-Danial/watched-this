import { useState } from "react";
import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import axios from "axios";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";
import { TV_Show } from "../types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [popularTogglePick, setPopularTogglePick] = useState<string>();
  const [trendingTogglePick, setTrendingTogglePick] = useState<string>();

  const onPopularToggleHandler = (pickedOptionTitle: string) => {
    setPopularTogglePick(pickedOptionTitle);
  };
  const onTrendingToggleHandler = (pickedOptionTitle: string) => {
    setPopularTogglePick(pickedOptionTitle);
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
          <ContentList contentList={props.popularContent} />
        </Section>
        <Section sectionTitle="Trending" optionTitles={["Today", "This Week"]} onToggleSelect={onPopularToggleHandler}>
          <ContentList contentList={props.popularContent} />
        </Section>
      </MainContainer>
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ popularContent: TV_Show[] }> = async (ctx) => {
  const { data } = await axios.get("http://localhost:3000/api/tv/popular");

  return {
    props: {
      popularContent: data,
    },
  };
};
