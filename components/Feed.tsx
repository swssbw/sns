import React from "react";
import FeedItem from "./FeedItem";
import { Quote } from "./../data";
import { useAppSelector } from "../features/hooks";

const Feed = () => {
  const contents = useAppSelector((state) => state.contents.contentsList);

  return (
    <div className="feed">
      <div>
        {contents.map((feedItem: Quote, index: number) => (
          <FeedItem feedItem={feedItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
