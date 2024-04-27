import React, { useContext, useState } from "react";

// Constants
import { basePathImage } from "../../../constants/common";

// Context
import { Context } from "../../../context/Context";

// Helpers
import { getGenresMapping } from "../helpers";

const MovieCard = ({ data }) => {
  const { state } = useContext(Context);
  const { genresList } = state;

  const GENRES_MAPPING = getGenresMapping(genresList);

  const [showOverview, setShowOverview] = useState(false);

  // To show movie description on hover
  const handleMouseEnter = () => {
    setShowOverview(true);
  };

  const handleMouseLeave = () => {
    setShowOverview(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowOverview(!showOverview)}
      className="flex  justify-center relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out 
     "
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          showOverview
            ? "backdrop-blur-xl from-gray-200/50 via-gray-800/80 to-gray-900/100"
            : "from-gray-200/10 via-gray-800/50 to-gray-900/100"
        } z-10`}
      />

      <div
        className={`flex flex-col absolute ${
          !showOverview && "z-20"
        } bottom-2 left-1 gap-2`}
      >
        <div className="font-bold text-lg">{data?.original_title}</div>

        <div className="text-xs inline-flex flex-wrap">
          <span className="text-gray-100">Genre: </span>

          {data?.genre_ids.map((genreId, index) => (
            <p key={index} className="text-gray-400 font-semibold">
              &nbsp;
              {GENRES_MAPPING[genreId]}
              {index !== data?.genre_ids?.length - 1 && " | "}
            </p>
          ))}
        </div>
      </div>

      {showOverview && (
        <div className="absolute top-1 p-1 text-xs font-bold z-50 overflow-y-scroll h-60 md:p-5 md:text-base">
          {data?.overview}
        </div>
      )}

      <img
        className="object-contain"
        height={300}
        width={300}
        alt={data?.original_title}
        src={`${basePathImage}${data?.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
