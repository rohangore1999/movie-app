import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context/Context";

const Dropdown = ({ text, options }) => {
  const [state, setstate] = useState(false);
  const [selected, setSelected] = useState([]);

  const { setData, dispatch } = useContext(Context);

  const handleSelected = (e, option) => {
    const isChecked = e.target.checked;
    const updatedSelected = [...selected]; // creating copy

    // If not exist; return -1 else: index
    const existingIndex = updatedSelected.findIndex(
      (item) => item.value === option.value
    );

    if (existingIndex !== -1) {
      // if exist, update active field
      updatedSelected[existingIndex].active = isChecked;
    } else {
      // for 1st time, so add active field
      updatedSelected.push({ ...option, active: isChecked });
    }

    setSelected(updatedSelected);

    // Filtering the value of Selected Genre
    const selectedGenreId = updatedSelected
      .filter((updatedSelectedObj) => updatedSelectedObj.active)
      .map((updatedSelectedObj) => updatedSelectedObj.value);

    setData(selectedGenreId);
    dispatch({ type: "GENRE", payload: selectedGenreId });
  };

  return (
    <div className="inline-block relative w-24 text-center">
      <button
        onClick={() => setstate(!state)}
        className=" font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1">{text}</span>

        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>

      <ul
        className={`absolute rounded-xl  h-[350px] overflow-y-scroll  ${
          !state && "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.key}
            className="last:rounded-b bg-[#303030] py-2 px-4 block whitespace-no-wrap text-left"
          >
            <div className="flex items-center justify-between gap-2">
              <input
                type="checkbox"
                className="border-gray-300 rounded"
                onClick={(e) => handleSelected(e, option)}
              />

              <div className="w-24">{option.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
