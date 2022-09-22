import React, { useEffect, useState } from "react";
import { HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../features/hooks";
import { User, UserList } from "../data";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const users = useAppSelector((state) => state.users.userList);
  const [userList, setUserList] = useState<UserList>([]);

  // 랜덤 정수 5개 생성
  const makeRandomNumber = () => {
    let tmp = [];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 29);
      if (tmp.indexOf(randomNum) === -1) {
        tmp.push(randomNum);
      }
    }
    return tmp;
  };

  useEffect(() => {
    const indexArr = makeRandomNumber();
    let tmp: UserList = [];
    indexArr.forEach((index) => tmp.push(users[index]));
    setUserList(tmp);
  }, [users]);

  return (
    <div className="sidebar">
      <div>
        <p className="sidebar_title">RECOMMENDED</p>
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
