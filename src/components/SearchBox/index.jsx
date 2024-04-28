import React, { useContext, useState } from "react";

// Icons
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Context
import { Context } from "../../context/Context";

// Constants
import { ACTION_TYPES } from "../../reducers/constants";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);

    dispatch({ type: ACTION_TYPES.SEARCHED_MOVIE, payload: value });
  };

  const handleClear = () => {
    setInputValue("");

    dispatch({ type: ACTION_TYPES.SEARCHED_MOVIE, payload: "" });
  };

  return (
    <div className="relative rounded overflow-hidden flex z-50">
      <input
        type="text"
        className="pr-6 pl-1 py-2 text-black w-32 h-8 md:w-64"
        onChange={handleChange}
        value={inputValue}
      />

      {inputValue ? (
        <IoClose
          className="absolute text-black top-2 right-1 hover:scale-150 hover:cursor-pointer"
          onClick={handleClear}
        />
      ) : (
        <FaSearch className="absolute text-black top-2 right-1" />
      )}
    </div>
  );
};

export default SearchBox;
