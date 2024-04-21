// Constants
import { apiKey } from "../constants/common";

// Utils
import { objectToQueryString } from "../utils/common";
import http from "../utils/http";

export const getMovies = async (year, queryObj) => {
  const stringifyObj = objectToQueryString(queryObj);

  try {
    const response = await http.get(
      `discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100&${stringifyObj}`
    );

    return response;
  } catch (error) {
    return error;
  }
};
