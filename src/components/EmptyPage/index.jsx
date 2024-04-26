import React, { useContext } from "react";

// Context
import { Context } from "../../context/Context";

// Images
import noSearchResult from "../../images/no-search-found-2511608-2133696.webp";

const EmptyPage = () => {
  const { state } = useContext(Context);
  const { searchedMovie } = state;

  return (
    <>
      <div className="p-5 text-2xl">
        No result for "<span className="font-bold">{searchedMovie}</span>"
      </div>

      <div className="flex justify-center items-center h-[80vh]">
        <img src={noSearchResult} />
      </div>
    </>
  );
};

export default EmptyPage;
