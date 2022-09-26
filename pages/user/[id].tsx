import React from "react";
import axios from "axios";

type userPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  reactions: number;
};

type Props = {
  userPosts: userPost[];
  userInfo: any;
};

const Id = ({ userPosts, userInfo }: Props) => {
  console.log(userPosts);
  console.log(userInfo);

  return (
    <div className="userPage">
      <div className="userPage_section1 userInfo">
        <p className="userInfo_username">@ {userInfo.username}</p>
        <p className="userInfo_name">
          {userInfo.firstName} {userInfo.lastName} ({userInfo.gender})
        </p>
        <p className="userInfo_email">{userInfo.email}</p>
        <p className="userInfo_university">{userInfo.university}</p>
        <p className="userInfo_length">Post : {userPosts.length}</p>
      </div>
      <div className="userPage_section2 userPosts">
        {userPosts.map((post) => (
          <div className="userPost_item">
            <div className="userPost_item_title">📃{post.title}</div>
            <p className="userPost_item_body">{post.body}</p>
            <div>
              {post.tags.map((tag) => (
                <span className="userPost_tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Id;

export async function getServerSideProps(context) {
  const userPosts = await axios
    .get(`https://dummyjson.com/posts/user/${context.query.id}`)
    .then((response) => response.data.posts);

  const userInfo = await axios.get(`https://dummyjson.com/users/${context.query.id}`).then((response) => response.data);

  return {
    props: {
      userPosts: userPosts,
      userInfo: userInfo,
      layout: "user",
    },
  };
}