import React, { useEffect, useState, MouseEvent } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

type Post = {
  error: boolean;
  body?: string;
};

const search = () => {
  const [post, setPost] = useState<Post>({
    error: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleKeywordClick = (keyword: string) => {
    Router.push(`/search?word=${keyword}`);
  };

  useEffect(() => {
    setIsLoading(true);

    axios.get(`https://dummyjson.com/posts/search?q=${router.query.word}`).then((response) => {
      if (response.data.total > 0) {
        const { body } = response.data.posts[0];
        setPost({ error: false, body });
      } else setPost({ error: true });

      setIsLoading(false);
    });
  }, [router]);

  if (isLoading) return <h1>Loading...</h1>;
  if (post.error) return <h1>No Results.</h1>;

  return (
    <>
      <div className="feedItem">
        <div>
          <div className="feedItem_image">
            <Image
              src={`https://source.unsplash.com/featured/?${router.query.word}`}
              blurDataURL={`https://source.unsplash.com/featured/?${router.query.word}`}
              alt="image"
              placeholder="blur"
              layout="responsive"
              width={370}
              height={370}
            />
          </div>
          <p className="feedItem_contents">{post?.body}</p>
        </div>
      </div>
      <div className="sidebar sidebar_search">
        <div>
          <p className="sidebar_title sidebar_search_title">Recommended</p>
          <div className="sidebar_contents">
            <p className="sidebar_search_keyword" onClick={() => handleKeywordClick("summer")}>
              🌴 summer
            </p>
            <p className="sidebar_search_keyword" onClick={() => handleKeywordClick("winter")}>
              ⛄ winter
            </p>
            <p className="sidebar_search_keyword" onClick={() => handleKeywordClick("sun")}>
              🌞 sun
            </p>
            <p className="sidebar_search_keyword" onClick={() => handleKeywordClick("beach")}>
              🌊 beach
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default search;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
