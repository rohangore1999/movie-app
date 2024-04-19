import React from "react";
import { basePath } from "../../../constants/common";

const MovieCard = ({ data }) => {
  console.log({ data });
  console.log(`${basePath}${data.poster_path}`);
  return (
    <div className="flex justify-center">
      <div>
        <img
          className="object-contain"
          src={`${basePath}${data.poster_path}`}
        />
        <div>{data.original_title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
