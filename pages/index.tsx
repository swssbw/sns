import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>

      <main>
        <Header />
        <div
          className="
          grid grid-cols-3 
          xs:max-w-md
          sm:max-w-lg
          md:max-w-2xl 
          lg:max-w-5xl 
          mx-auto 
          max-h-screen overflow-hidden"
        >
          <Feed />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
