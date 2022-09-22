import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import Image from "next/image";

type Post = {
  total: number;
  body?: string;
  image?: string;
};

const search = () => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`https://dummyjson.com/posts/search?q=${Router.router.state.query.word}`).then((response) => {
      if (response.data.total > 0)
        setPost({ total: 1, body: response.data.posts[0].body, image: "https://picsum.photos/370" });
      else setPost({ total: 0 });
      setIsLoading(false);
    });
  }, []);

  if (post?.total === 0) return <h1>No Results.</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="feedItem">
      <div>
        <div className="feedItem_image">
          <Image
            src={post?.image ?? ""}
            blurDataURL={post?.image}
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
  );
};

export default search;
