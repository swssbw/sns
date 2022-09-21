import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getContentsList } from "../features/contents/contentsSlice";
import { getUsersList } from "../features/users/usersSlice";
import wrapper from "../features/store";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>

      <main>
        <Header />
        <div className="main">
          <Feed />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(getContentsList());
  await store.dispatch(getUsersList());

  return {
    props: {},
  };
});

export default Home;
