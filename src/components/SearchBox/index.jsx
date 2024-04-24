import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
  };

  return (
    <div className="relative rounded overflow-hidden flex ">
      <input
        type="text"
        className="pr-6 pl-1 py-2 text-black w-32 h-8"
        onChange={handleChange}
        value={inputValue}
      />

      <FaSearch className="absolute text-black top-2 right-1" />
    </div>
  );
};

export default SearchBox;
