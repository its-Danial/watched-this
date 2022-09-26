import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import MainContainer from "../components/Container/MainContainer";

const Home: NextPage = () => {
  return (
    <main>
      <MainContainer>
        <Banner />
      </MainContainer>
    </main>
  );
};

export default Home;
