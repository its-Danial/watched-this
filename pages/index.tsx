import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import ContentList from "../components/Home/ContentList";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";
import { PopularResult } from "../types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [sectionToggle, setSectionToggle] = useState({ popular: "On TV", trending: "Today" });

  const onSectionToggleHandler = (sectionName: string, selectedOption: string) => {
    setSectionToggle((prevState) => ({ ...prevState, [sectionName]: selectedOption }));
  };

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
          onToggleSelect={onSectionToggleHandler.bind(null, "trending")}
          isToggled={sectionToggle.trending === "Today" ? false : true}
        >
          <ContentList
            listContent={
              sectionToggle.popular === "Today"
                ? props.popularContent.popularTvShows.results
                : props.popularContent.popularMovies.results
            }
          />
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
