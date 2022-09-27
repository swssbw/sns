import type { NextPage } from "next";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getContentsList, getContentsByScroll } from "../features/contents/contentsSlice";
import { getUsersList } from "../features/users/usersSlice";
import wrapper from "../features/store";
import { useEffect, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { ColorRing } from "react-loader-spinner";
import PostLayout from "../components/PostsLayout";

const Home = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.contents.isLoading);

  let page = 4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (page < 16) {
            dispatch(getContentsByScroll(page));
            page += 4;
          }
        }
      },
      { threshold: 0 }
    );

    const target = document.querySelector("#target");
    if (target) observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Feed />
      <Sidebar />
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          colors={["#15605c", "#068071", "#279876", "#33b586", "#64cd9f"]}
        />
      )}
      <div id="target" />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PostLayout>{page}</PostLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(getContentsList());
  await store.dispatch(getUsersList());

  return {
    props: {},
  };
});

export default Home;
