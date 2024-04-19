import React from "react";

// Components
import Header from "../../components/Header";
import MovieLists from "./components/MovieLists";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Movie Lists */}

      <MovieLists />
    </div>
  );
};

export default Home;
