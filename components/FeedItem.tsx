import React from "react";
import Image from "next/image";
import sampleimg from "../public/123.jpg";
import { UserCircleIcon } from "@heroicons/react/24/outline";

// type Props = {
//   feedItem :
// }

const FeedItem = (props) => {
  const { feedItem } = props;

  return (
    <div className="feedItem">
      <div>
        <p className="feedItem_title">
          <UserCircleIcon width={25} height={25} style={{ marginRight: "8px" }} />
          {feedItem.author}
        </p>
        <div>
          <Image src={sampleimg} alt="image" placeholder="blur" width={370} height={370} />
        </div>
        <p className="feedItem_contents">{feedItem.quote}</p>
      </div>
    </div>
  );
};

export default FeedItem;
