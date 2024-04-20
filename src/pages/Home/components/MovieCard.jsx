import React from "react";

// Constants
import { basePathImage } from "../../../constants/common";

const MovieCard = ({ data }) => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <img
            className="object-contain"
            height={300}
            width={300}
            alt={data.original_title}
            src={`${basePathImage}${data.poster_path}`}
          />
          <div>{data.original_title}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
