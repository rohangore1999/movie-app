import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context/Context";

// Icons
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
    dispatch({ type: "SEARCHED_MOVIE", payload: value });
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
