import React from "react";
import { HomeIcon, UserIcon, UsersIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex p-2 items-center col-span-1 justify-center" style={{ borderBottom: "1px solid #eee" }}>
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full py-2 px-4">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-1 w-48" />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <HomeIcon className="h-6 w-6 mx-3" />
      <UserIcon className="h-6 w-6" />
    </div>
  );
};

export default Header;
