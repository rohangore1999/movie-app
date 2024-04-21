import React, { useEffect, useState, useRef, useContext } from "react";
import _get from "lodash/get";
import _find from "lodash/find";

// Components
import MovieCards from "./MovieCards";

// Services
import { getMovies } from "../../../services/movies";

// Context
import { Context } from "../../../context/Context";

const MovieLists = () => {
  const [movieData, setMovieData] = useState([]);
  const [year, setYear] = useState(2012);

  const sentinelTopRef = useRef(null);
  const sentinelBottomRef = useRef(null);

  const { data: selectedGenre } = useContext(Context);

  useEffect(() => {
    fetchData(year, selectedGenre);
  }, [year, selectedGenre]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (sentinelTopRef.current) {
      // invoke callback, on visible
      observer.observe(sentinelTopRef.current);
    }

    if (sentinelBottomRef.current) {
      // invoke callback, on visible
      observer.observe(sentinelBottomRef.current);
    }

    return () => {
      if (sentinelTopRef.current) {
        observer.unobserve(sentinelTopRef.current);
      }

      if (sentinelBottomRef.current) {
        observer.unobserve(sentinelBottomRef.current);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Check for element isIntersecting: true
        if (entry.target.id === "sentinel-top") {
          // check for target id
          setYear((prevYear) => +prevYear + 1);
        }

        if (entry.target.id === "sentinel-bottom") {
          setYear((prevYear) => +prevYear - 1);
        }
      }
    });
  };

  const fetchData = async (year, selectedGenre) => {
    // TODO: check if we can handle already movie fetch should not call [not sure]
    // To checking if movie is already fetched
    // if (_find(movieData, { year: year })) {
    //   return;
    // }

    const queryObj = { with_genres: selectedGenre };

    const data = await getMovies(year, queryObj);

    setMovieData((prevData) => {
      if (
        Number(year) <
        Number(prevData[0]?.data[0]?.release_date?.substring(0, 4))
      ) {
        // If current year is less then append the data (scroll down)
        return [...prevData, { year, data: [..._get(data, "results", [])] }];
      } else if (
        Number(year) >
        Number(
          prevData[prevData.length - 1]?.data[
            prevData.length - 1
          ]?.release_date.substring(0, 4)
        )
      ) {
        // If current year is more then prepend the data (scroll up)
        return [{ year, data: [..._get(data, "results", [])] }, ...prevData];
      }

      return [{ year, data: _get(data, "results", []) }];
    });
  };

  return (
    <>
      <div
        className="mb-20 text-white z-50 absolute top-0 border border-1 w-full"
        id="sentinel-top"
        ref={sentinelTopRef}
      >
        Here
      </div>

      <section className="p-5 mt-10">
        {movieData.map((movie) => (
          <MovieCards title={movie.year} movieData={movie.data} />
        ))}

        <div
          className="invisible"
          id="sentinel-bottom"
          ref={sentinelBottomRef}
        />
      </section>
    </>
  );
};

export default MovieLists;
