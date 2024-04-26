import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context/Context";

// Icons
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);

    dispatch({ type: "SEARCHED_MOVIE", payload: value });
  };

  const handleClear = () => {
    setInputValue("");

    dispatch({ type: "SEARCHED_MOVIE", payload: "" });
  };

  return (
    <div className="relative rounded overflow-hidden flex ">
      <input
        type="text"
        className="pr-6 pl-1 py-2 text-black w-32 h-8"
        onChange={handleChange}
        value={inputValue}
      />

      {inputValue ? (
        <IoClose
          className="absolute text-black top-2 right-1 hover:scale-150 hover:cursor-pointer "
          onClick={handleClear}
        />
      ) : (
        <FaSearch className="absolute text-black top-2 right-1" />
      )}
    </div>
  );
};

export default SearchBox;
