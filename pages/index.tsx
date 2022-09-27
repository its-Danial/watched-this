import type { NextPage } from "next";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";
import HomeContentCard from "../components/UI/Cards/HomeContentCard";

const Home: NextPage = () => {
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
          optionTitles={["On TV", "Streaming", "In Theaters"]}
          onToggleSelect={onPopularToggleHandler}
        >
          <ContentList />
        </Section>
      </MainContainer>
    </main>
  );
};

export default Home;
