import React from "react";

// Components
import Logo from "../Logo";
import Dropdown from "../Dropdown";

// Constants
import { dropDownGenresOptions } from "../../constants/genres";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 bg-[#232323]">
      <div className="p-5 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <Dropdown text="Genre" options={dropDownGenresOptions} />
      </div>
    </header>
  );
};

export default Header;
