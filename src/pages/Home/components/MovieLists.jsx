import React, { useEffect, useState, useRef } from "react";
import _get from "lodash/get";

// Components
import MovieCards from "./MovieCards";

// Services
import { getMovies } from "../../../services/movies";

const MovieLists = () => {
  const [movieData, setMovieData] = useState([]);
  const [year, setYear] = useState("2012");

  const sentinelTopRef = useRef(null);
  const sentinelBottomRef = useRef(null);

  useEffect(() => {
    fetchData(year);
  }, [year]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (sentinelTopRef.current) {
      observer.observe(sentinelTopRef.current);
    }

    if (sentinelBottomRef.current) {
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
        if (entry.target.id === "sentinel-top") {
          setYear((prevYear) => +prevYear + 1);
        }

        if (entry.target.id === "sentinel-bottom") {
          setYear((prevYear) => +prevYear - 1);
        }
      }
    });
  };

  const fetchData = async (year) => {
    let data = await getMovies(year);

    setMovieData((prevData) => {
      if (
        Number(year) <
        Number(prevData[0]?.data[0]?.release_date?.substring(0, 4))
      ) {
        return [...prevData, { year, data: [..._get(data, "results", [])] }];
      } else if (
        Number(year) >
        Number(
          prevData[prevData.length - 1]?.data[
            prevData.length - 1
          ]?.release_date.substring(0, 4)
        )
      ) {
        return [{ year, data: [..._get(data, "results", [])] }, ...prevData];
      }
      return [{ year, data: _get(data, "results", []) }];
    });
  };

  return (
    <>
      <div className="invisible" id="sentinel-top" ref={sentinelTopRef} />

      <section className="p-5">
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
