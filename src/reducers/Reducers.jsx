// Constants
import { ACTION_TYPES } from "./constants";

export const initialState = {
  selectedGenre: [],
  searchedMovie: "",
  genresList: [],
};

export const Reducers = (previousState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GENRE:
      return {
        ...previousState,
        selectedGenre: action.payload,
      };

    case ACTION_TYPES.SEARCHED_MOVIE:
      return { ...previousState, searchedMovie: action.payload };

    case ACTION_TYPES.GENRE_LIST:
      return { ...previousState, genresList: action.payload.genres };
  }
};
