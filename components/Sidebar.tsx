import React from "react";
import { HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../features/hooks";

const Sidebar = () => {
  const users = useAppSelector((state) => state.users.userList);

  return (
    <div className="sidebar">
      <div>
        <p className="sidebar_title">RECOMMENDED AUTHORS</p>
      </div>
    </div>
  );
};

export default Sidebar;
