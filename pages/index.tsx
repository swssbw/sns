import type { NextPage } from "next";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { getContentsList, getContentsByScroll } from "../features/contents/contentsSlice";
import { getUsersList } from "../features/users/usersSlice";
import wrapper from "../features/store";
import { useEffect } from "react";

const Home: NextPage = () => {
  const dispatch = useDispatch();
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
      { threshold: 0.5, rootMargin: "80px" }
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
      <div id="target" />
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
