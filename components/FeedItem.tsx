import React from "react";
import Image from "next/image";
import sampleimg from "../public/123.jpg";

// type Props = {
//   feedItem :
// }

const FeedItem = (props) => {
  const { feedItem } = props;

  return (
    <div>
      <div>
        <p>{feedItem.author}</p>
        <div>
          <Image src={sampleimg} alt="image" placeholder="blur" width={360} height={360} />
        </div>
        <p>{feedItem.quote}</p>
      </div>
    </div>
  );
};

export default FeedItem;
