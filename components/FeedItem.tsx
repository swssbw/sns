import React from "react";
import Image from "next/image";
import sampleimg from "../public/123.jpg";
import { Quote } from "../data";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  feedItem: Quote;
};

const FeedItem = (props: Props) => {
  const { feedItem } = props;

  return (
    <div className="feedItem">
      <div>
        <p className="feedItem_title">
          <UserCircleIcon width={25} height={25} style={{ marginRight: "8px" }} />
          {feedItem.author}
        </p>
        <div className="feedItem_image">
          {/* <Image src={sampleimg} alt="image" placeholder="blur" layout="responsive" /> */}
          <Image
            // src="https://picsum.photos/370"
            // src="https://picsum.photos/id/10/370/370"
            // blurDataURL="https://picsum.photos/id/10/370/370"
            src={feedItem.image}
            blurDataURL={feedItem.image}
            alt="image"
            placeholder="blur"
            layout="responsive"
            width={370}
            height={370}
          />
        </div>
        <p className="feedItem_contents">{feedItem.quote}</p>
      </div>
    </div>
  );
};

export default FeedItem;
