import React, { useContext } from "react";

// Components
import Logo from "../Logo";
import Dropdown from "../Dropdown";
import SearchBox from "../SearchBox";

// Context
import { Context } from "../../context/Context";

// Helpers
import { modifyGenresList } from "./helpers";

const Header = () => {
  const { state } = useContext(Context);
  const { genresList } = state;

  const dropDownGenresOptions = modifyGenresList(genresList);

  return (
    <header className="sticky z-50 top-0 bg-[#232323]">
      <div className="p-5 flex items-center justify-between md:px-64">
        <div>
          <Logo />
        </div>

        <div className="flex items-center md:space-x-20">
          <Dropdown text="Genre" options={dropDownGenresOptions} />

          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
