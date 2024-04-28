// Constants
import { apiKey } from "../constants/common";

// Utils
import { objectToQueryString } from "../utils/common";
import http from "../utils/http";

export const getMovies = async (year, queryObj) => {
  let stringifyObj;
  if (queryObj) {
    stringifyObj = objectToQueryString(queryObj);
  }

  try {
    const response = await http.get(
      `discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100&${
        !!stringifyObj ? stringifyObj : ""
      }`
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const getMovieBySearch = async (searchQuery, pageNo) => {
  try {
    const response = await http.get(
      `search/movie?api_key=${apiKey}&query=${searchQuery}&page=${pageNo}`
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const getGenreList = async () => {
  try {
    const response = await http.get(
      `genre/movie/list?api_key=${apiKey}&language=en`
    );

    return response;
  } catch (error) {
    return error;
  }
};
