import axios from "axios";
import _get from "lodash/get";

// Creating Axios instance
const http = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// Request Interceptior
http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response Interceptor

// This interceptor is executed after a response is received. It extracts the response data and returns it. If an error occurs, it handles the error by extracting information like status message, status code, and the URL that was being fetched. Then it alerts the user about the error and rejects the promise with the error.

http.interceptors.response.use(
  (response) => {
    return response.data;
  },

  function errorResponse(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const message = _get(
      error,
      "response.data.status_message",
      "Something went wrong"
    );
    const statusCode = _get(error, "response.data.status_code", 500);
    const fetchUrl = _get(error, "response.config.url", "");

    alert(
      `\n\nError message: ${message}\n\n Fetch Url: ${fetchUrl}\n\n Status Code: ${statusCode}`
    );

    return Promise.reject(error);
  }
);

export default http;
