import type { NextPage } from "next";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getContentsList } from "../features/contents/contentsSlice";
import { getUsersList } from "../features/users/usersSlice";
import wrapper from "../features/store";

const Home: NextPage = () => {
  return (
    <>
      <Feed />
      <Sidebar />
    </>
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
