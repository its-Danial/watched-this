import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import MainContainer from "../components/Layouts/Container/MainContainer";
import Section from "../components/Layouts/Section/Section";

const Home: NextPage = () => {
  return (
    <main className="mt-16 bg-white min-h-screen">
      <MainContainer>
        <Banner />
        <Section
          sectionTitle="What's Popular"
          optionTitles={["Streaming", "On TV", "In Theaters n Theatersn Theaters", "Home", "Netflix"]}
        />
      </MainContainer>
    </main>
  );
};

export default Home;
