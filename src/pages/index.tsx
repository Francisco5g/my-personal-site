import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MobileNavMenu from "../components/MobileNavMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Francisco5g </title>
      </Head>

      <Header />

      <MobileNavMenu />
      
      <main>
        <div> I'm working on it!!!!! </div>
      </main>
    </div>
  );
};

export default Home;
