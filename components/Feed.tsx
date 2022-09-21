import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import FeedItem from "./FeedItem";
import { FeedItemContents } from "./../data";
import { useAppSelector } from "../features/hooks";

const Feed = () => {
  const contents = useAppSelector((state) => state.contents.contentsList);

  return (
    <div className="feed">
      <div>
        {contents.map((feedItem, index) => (
          <FeedItem feedItem={feedItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
