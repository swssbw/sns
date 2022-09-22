import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import Image from "next/image";

type Post = {
  total: number;
  body?: string;
};

const search = () => {
  const [post, setPost] = useState<Post>({
    total: 0,
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`https://dummyjson.com/posts/search?q=${Router.router.state.query.word}`).then((response) => {
      if (response.data.total > 0) setPost({ total: 1, body: response.data.posts[0].body });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (post.total === 0) return <h1>No Results.</h1>;
  return (
    <div className="feedItem">
      <div>
        <div className="feedItem_image">
          <Image
            src="https://picsum.photos/370"
            blurDataURL="https://picsum.photos/370"
            alt="image"
            placeholder="blur"
            layout="responsive"
            width={370}
            height={370}
          />
        </div>
        <p className="feedItem_contents">{post.body}</p>
      </div>
    </div>
  );
};

export default search;
