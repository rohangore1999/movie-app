import React from "react";

// Components
import Title from "../../../components/Title/Title";
import MovieCards from "./MovieCards";

const MovieLists = () => {
  return (
    <section className="p-5">
      <Title>2010</Title>

      <MovieCards />
    </section>
  );
};

export default MovieLists;

// 20240419090620
// https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100
