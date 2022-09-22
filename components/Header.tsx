import { useState } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Router from "next/router";

const Header = () => {
  const [word, setWord] = useState("");
  const handleSearchClick = () => {
    if (word === "") alert("검색어를 입력해주세요.");
    Router.push(`/search?word=${word}`);
  };

  const handleInputChange = (e) => {
    // 영문만 입력되도록
    setWord(e.target.value);
  };

  const handleEnterKeyUp = (e) => {
    if (e.keyCode === 13) handleSearchClick();
  };
  return (
    <div className="header">
      <div className="header_search" onKeyUp={(e) => handleEnterKeyUp(e)}>
        <input type="text" placeholder="Search..." value={word} onChange={(e) => setWord(e.target.value)} />
        <MagnifyingGlassIcon className="header_search_icon" onClick={handleSearchClick} />
      </div>
      <HomeIcon className="header_icon" />
    </div>
  );
};

export default Header;
