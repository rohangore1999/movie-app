import React, { useContext, useEffect } from "react";

// Components
import Header from "../../components/Header";
import MovieLists from "./components/MovieLists";

// Services
import { getGenreList } from "../../services/movies";
import { ACTION_TYPES } from "../../reducers/constants";

// Context
import { Context } from "../../context/Context";

const Home = () => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      const data = await getGenreList();

      dispatch({ type: ACTION_TYPES.GENRE_LIST, payload: data });
    })();
  }, []);

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
