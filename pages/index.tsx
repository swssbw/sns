import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { FeedItemContents } from "../data";

type Props = {
  contents: FeedItemContents;
};

const Home: NextPage<Props> = (props: Props) => {
  const { contents } = props;

  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>

      <main>
        <Header />
        <div className="">
          <Feed feedItems={contents} />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const {
    data: { quotes },
  } = await axios.get("https://dummyjson.com/quotes");

  return {
    props: {
      contents: quotes,
    },
  };
}

export default Home;
