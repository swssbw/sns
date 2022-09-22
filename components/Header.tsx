import React from "react";
import { HomeIcon, UserIcon, UsersIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Router from "next/router";

const Header = () => {
  const handleSearchClick = () => {
    Router.push("/search?word=summer", "/search");
  };

  return (
    <div className="header">
      <div className="header_search">
        <input type="text" placeholder="Search..." />
        <MagnifyingGlassIcon className="header_search_icon" onClick={handleSearchClick} />
      </div>
      <HomeIcon className="header_icon" />
    </div>
  );
};

export default Header;
