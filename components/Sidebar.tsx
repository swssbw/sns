import React, { useEffect, useState } from "react";
import { useAppSelector } from "../features/hooks";
import { User, UserList } from "../data";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const users = useAppSelector((state) => state.users.userList);
  const [userList, setUserList] = useState<UserList>([]);

  useEffect(() => {
    setUserList(users.slice(0, 5));
  }, [users]);

  return (
    <div className="sidebar">
      <div>
        <p className="sidebar_title">Recommended</p>
        <div className="sidebar_contents">
          {userList.map((user: User, index: number) => (
            <SidebarItem item={user} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
