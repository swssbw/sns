import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

type Post = {
  error: boolean;
  body?: string;
};

type Props = {
  post: Post;
};

const search = ({ post }: Props) => {
  if (post.error) return <h1>No Results.</h1>;
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

export async function getServerSideProps(context: { query: { word: string } }) {
  let tmp = {
    body: "",
    error: true,
  };

  await axios.get(`https://dummyjson.com/posts/search?q=${context.query.word}`).then((response) => {
    if (response.data.posts.length > 0) {
      tmp = {
        body: response.data.posts[0].body,
        error: false,
      };
    }
  });

  return {
    props: {
      post: tmp,
    },
  };
}
