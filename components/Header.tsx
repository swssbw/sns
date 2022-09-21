import React from "react";
import { HomeIcon, UserIcon, UsersIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="header">
      <div className="header_search">
        <input type="text" placeholder="Search..." />
        <MagnifyingGlassIcon className="header_search_icon" />
      </div>
      <HomeIcon className="header_icon" />
      <UserIcon className="header_icon" />
    </div>
  );
};

export default Header;
