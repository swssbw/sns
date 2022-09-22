import Image from "next/image";
import React from "react";
import { User } from "../data";

type Props = {
  item: User;
};
const SidebarItem = (props: Props) => {
  const { item } = props;
  return (
    <div className="sidebar_item">
      <Image
        src={item.image}
        alt="user image"
        width={25}
        height={25}
        className="sidebar_item_image sidebar_item_col1"
      />
      <p className="sidebar_item_col2">
        <p className="sidebar_item_name">{item.name}</p>
        <p className="sidebar_item_email">{item.email}</p>
      </p>
    </div>
  );
};

export default SidebarItem;
