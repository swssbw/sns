import { useState, KeyboardEvent, ChangeEvent } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Router from "next/router";

const Header = () => {
  const [word, setWord] = useState("");
  const handleSearchClick = () => {
    if (word === "") alert("검색어를 입력해주세요.");
    Router.push(`/search?word=${word}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const eng = /^[a-zA-Z]*$/;
    if (eng.test(target.value)) setWord(target.value);
    else return;
  };

  const handleEnterKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(e);
    if (e.code === "Enter") handleSearchClick();
  };

  return (
    <div className="header">
      <div className="header_search" onKeyUp={(e) => handleEnterKeyUp(e)}>
        <input type="text" placeholder="Search..." value={word} onChange={(e) => handleInputChange(e)} />
        <MagnifyingGlassIcon className="header_search_icon" onClick={handleSearchClick} />
      </div>
      <HomeIcon className="header_icon" />
    </div>
  );
};

export default Header;
