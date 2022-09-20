import React from "react";
import { HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <SidebarRow title="HOME" Icon={HomeIcon} />
      <SidebarRow title="USER" Icon={UsersIcon} />
      <SidebarRow title="SIGN IN" Icon={UserIcon} />
    </div>
  );
};

export default Sidebar;
