import React from "react";
import { HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:visible lg:col-span-1 invisible" style={{ border: "1px solid red" }}>
      {/* <SidebarRow title="HOME" Icon={HomeIcon} />
      <SidebarRow title="USER" Icon={UsersIcon} />
      <SidebarRow title="SIGN IN" Icon={UserIcon} /> */}
      {/* 친구추천 */}
      친구추천
    </div>
  );
};

export default Sidebar;
