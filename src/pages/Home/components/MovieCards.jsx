import React from "react";

// Components
import MovieCard from "./MovieCard";
import Title from "../../../components/Title/Title";

const MovieCards = ({ title, movieData }) => {
  return (
    <div className="flex flex-col mt-24 first:mt-0">
      <Title>{title}</Title>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {movieData?.map((data) => (
          <MovieCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
