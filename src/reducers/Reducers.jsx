import { ACTION_TYPES } from "./constants";

export const initialState = {
  selectedGenre: [],
  searchedMovie: "",
};

export const Reducers = (previousState, action) => {
  debugger;
  switch (action.type) {
    case ACTION_TYPES.GENRE:
      return [...previousState.selectedGenre, action.payload];

    case ACTION_TYPES.SEARCHED_MOVIE:
      return (previousState.selectedGenre = searchedMovie);
  }
};
