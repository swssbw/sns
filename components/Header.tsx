import React from "react";
import { HomeIcon, UserIcon, UsersIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." />
        <MagnifyingGlassIcon />
      </div>
      <HomeIcon />
      <UserIcon />
    </div>
  );
};

export default Header;
