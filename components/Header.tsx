import { useState, KeyboardEvent, ChangeEvent, useEffect } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Router, { useRouter } from "next/router";

const Header = () => {
  const [word, setWord] = useState("");
  const router = useRouter();

  const handleSearchClick = () => {
    if (word === "") {
      alert("검색어를 입력해주세요.");
      return;
    }

    Router.push(`/search?word=${word}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const eng = /^[a-zA-Z]*$/;
    if (eng.test(target.value)) setWord(target.value);
    else return;
  };

  const handleEnterKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") handleSearchClick();
  };

  const handleHomeClick = () => {
    Router.push(`/`);
    setWord("");
  };

  useEffect(() => {
    if (router.query) setWord(router.query.word);
  }, [router.query.word]);

  return (
    <div className="header">
      <div className="header_search" onKeyUp={(e) => handleEnterKeyUp(e)}>
        <input type="text" placeholder="Let's search love!" value={word} onChange={(e) => handleInputChange(e)} />
        <MagnifyingGlassIcon className="header_search_icon" onClick={handleSearchClick} />
      </div>
      <HomeIcon className="header_icon" onClick={handleHomeClick} />
    </div>
  );
};

export default Header;
