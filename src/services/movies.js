// Constants
import { apiKey } from "../constants/common";

// Utils
import http from "../utils/http";

export const getMovies = async (year) => {
  //TODO: util function while will convert queryObj to string with `&` ref-payout
  try {
    const response = await http.get(
      `discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`
    );

    return response;
  } catch (error) {
    return error;
  }
};
