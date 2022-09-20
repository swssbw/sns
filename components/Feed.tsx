import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import FeedItem from "./FeedItem";
import { FeedItemContents } from "./../data";

const Feed = (props) => {
  const { feedItems } = props;

  return (
    <div className="feed">
      <div>
        {feedItems.map((feedItem, index) => (
          <FeedItem feedItem={feedItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
