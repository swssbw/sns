import Image from "next/image";
import React from "react";
import { User } from "../data";
import Router from "next/router";

type Props = {
  item: User;
};

const SidebarItem = (props: Props) => {
  const { item } = props;

  const handleClickUser = () => {
    Router.push(`/user/${item.id}`);
  };

  return (
    <div className="sidebar_item" onClick={handleClickUser}>
      <Image
        src={item.image}
        alt="user image"
        width={25}
        height={25}
        className="sidebar_item_image sidebar_item_col1"
      />
      <div className="sidebar_item_col2">
        <p className="sidebar_item_name">{item.name}</p>
        <p className="sidebar_item_email">{item.email}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
