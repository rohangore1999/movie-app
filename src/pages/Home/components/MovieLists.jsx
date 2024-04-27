import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  Fragment,
} from "react";
import _get from "lodash/get";
import _find from "lodash/find";
import _debounce from "lodash/debounce";
import _isEmpty from "lodash/isEmpty";

// Components
import MovieCards from "./MovieCards";

// Services
import { getMovieBySearch, getMovies } from "../../../services/movies";

// Context
import { Context } from "../../../context/Context";
import Loader from "../../../components/Loader";
import EmptyPage from "../../../components/EmptyPage";

// It should not create multiple instance
const debouncedFetchSearchedMovie = _debounce(
  async (fetchFunction, searchQuery, pageNo) => {
    await fetchFunction(searchQuery, pageNo);
  },
  300
);

const MovieLists = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchedMovieData, setSearchedMovieData] = useState([]);
  const [year, setYear] = useState(2012);
  const [loading, setLoading] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isScrolled, setIsScrolled] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const sentinelTopRef = useRef(null);
  const sentinelBottomRef = useRef(null);
  const scrollRef = useRef(null);
  const yearListRef = useRef([2012]);
  const searchedMovieRef = useRef(null);
  const pageRef = useRef(1);

  const { state } = useContext(Context);
  const { searchedMovie, selectedGenre } = state;

  // To simulate scroll behavior when page mount
  useEffect(() => {
    // Scroll to a specific position when the page is reloaded
    if (scrollDirection === "down" && !searchedMovie) {
      window.scrollTo({ top: 50 });
    }

    if (scrollDirection === "up") {
      const newPosition = window.scrollY + 500; // Scroll down by 50 pixels
      window.scrollTo({ top: newPosition, behavior: "smooth" }); // Optionally, add smooth scrolling behavior
    }
  }); // This effect runs only once after the component mounts

  // To call an movie API's
  useEffect(() => {
    setLoading(true);

    // If searched keyword is present
    if (!!searchedMovie) {
      setIsScrolled(false);

      searchedMovieRef.current = searchedMovie;

      debouncedFetchSearchedMovie(fetchSearchedMovie, searchedMovie, pageNo);

      return;
    }

    fetchData(year, selectedGenre);
  }, [year, selectedGenre, searchedMovie, pageNo]);

  // To handle api call if user's scroll up or down [Intersection Observer]
  useEffect(() => {
    // To ignore multiple back to back api calls used Debounce
    const debounceHandleIntersect = _debounce(handleIntersect, 1500);

    // Creating an Instance of `IntersectionObserver`
    const observer = new IntersectionObserver(
      (entries) => {
        // Callback, which trigger when observed (sentinelTopRef | sentinelBottomRef) hits.
        debounceHandleIntersect(entries);
      },
      {
        // options
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (sentinelTopRef.current) {
      // invoke callback, on visible of sentinelTopRef
      observer.observe(sentinelTopRef.current);
    }

    if (sentinelBottomRef.current) {
      // invoke callback, on visible of sentinelBottomRef
      observer.observe(sentinelBottomRef.current);
    }

    return () => {
      // Cleaning up the observer when component unmount
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
        // Check for element isIntersecting
        if (entry.target.id === "sentinel-top") {
          // check for target id
          const nextYear = yearListRef.current[0] + 1;

          setScrollDirection("down");

          if (!yearListRef.current.includes(nextYear)) {
            yearListRef.current = [nextYear, ...yearListRef.current];

            setYear(nextYear);
          }
        }

        if (entry.target.id === "sentinel-bottom") {
          if (!!searchedMovieRef.current) {
            // For searched movies, when user scrolls down it should get new page data
            setIsScrolled(true);

            pageRef.current += 1;
            setPageNo(pageRef.current);

            return;
          }

          const prevYear =
            yearListRef.current[yearListRef.current.length - 1] - 1;

          setScrollDirection("up");

          if (!yearListRef.current.includes(prevYear)) {
            yearListRef.current = [...yearListRef.current, prevYear];
            setYear(prevYear);
          }
        }
      }
    });
  };

  // Fetch Movies based on searched keywords
  const fetchSearchedMovie = async (searchQuery, pageNo) => {
    const data = await getMovieBySearch(searchQuery, pageNo);

    setSearchedMovieData((previousSearchedMovieData) => {
      if (isScrolled) {
        // User has scrolled down, then append new movie data
        return [...previousSearchedMovieData, ..._get(data, "results", [])];
      }

      return _get(data, "results", []);
    });

    setLoading(false);
  };

  // Fetch Movies based on [ scroll up | scroll down | Genres ]
  const fetchData = async (year, selectedGenre) => {
    const queryObj = { with_genres: selectedGenre };

    const data = await getMovies(year, queryObj);

    setMovieData((prevData) => {
      if (
        Number(year) <
        Number(prevData[0]?.data[0]?.release_date?.substring(0, 4))
      ) {
        // If current year is less than previous, then append the data (scroll down)
        return [...prevData, { year, data: [..._get(data, "results", [])] }];
      } else if (
        Number(year) >
        Number(
          prevData[prevData.length - 1]?.data[
            prevData.length - 1
          ]?.release_date.substring(0, 4)
        )
      ) {
        // If current year is more than previous, then prepend the data (scroll up)
        return [{ year, data: [..._get(data, "results", [])] }, ...prevData];
      }

      return [{ year, data: _get(data, "results", []) }];
    });

    setLoading(false);
  };

  // Load "No Result Found Screen"
  if (!!searchedMovie && !loading && _isEmpty(searchedMovieData)) {
    return <EmptyPage />;
  }

  return (
    <>
      <div
        className="mb-20 z-50 absolute top-0"
        id="sentinel-top"
        ref={sentinelTopRef}
      />

      {/* Enable loader */}
      {loading && <Loader />}

      <section
        className={`p-5 ${searchedMovie ? "mt-0" : "mt-10"}`}
        ref={scrollRef}
      >
        {!!searchedMovie ? (
          <MovieCards title="Searched Movie" movieData={searchedMovieData} />
        ) : (
          movieData.map((movie, idx) => (
            <Fragment key={idx}>
              <MovieCards title={movie.year} movieData={movie.data} />
            </Fragment>
          ))
        )}

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
