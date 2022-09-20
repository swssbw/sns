import React from "react";
import { HomeIcon, UserIcon, UsersIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex p-2 items-center col-span-1 " style={{ border: "1px solid red" }}>
      <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-1" />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <HomeIcon className="h-6 w-6" />
      <UserIcon className="h-6 w-6" />
    </div>
  );
};

export default Header;
