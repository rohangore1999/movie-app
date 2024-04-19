import React from "react";

// Components
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 bg-[#232323]">
      <div className="p-5">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
