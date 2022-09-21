import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../features/hooks";
import { getContentsList } from "../features/contents/contentsSlice";
import wrapper from "../features/store";

const Home: NextPage = () => {
  const contents = useAppSelector((state) => state.contents.contentsList);
  console.log("********************", contents);

  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>

      <main>
        <Header />
        <div className="main">
          <Feed feedItems={contents} />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(getContentsList());

  return {
    props: {},
  };
});

export default Home;
