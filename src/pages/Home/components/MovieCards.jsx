import React from "react";

// Components
import MovieCard from "./MovieCard";

const MovieCards = () => {
  const datas = [
    {
      adult: false,
      backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 691.448,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.535,
      vote_count: 1183,
    },
    {
      adult: false,
      backdrop_path: "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      genre_ids: [28, 14, 10752],
      id: 856289,
      original_language: "zh",
      original_title: "封神第一部：朝歌风云",
      overview:
        "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      popularity: 570.321,
      poster_path: "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      release_date: "2023-07-20",
      title: "Creation of the Gods I: Kingdom of Storms",
      video: false,
      vote_average: 6.851,
      vote_count: 198,
    },
    {
      adult: false,
      backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 691.448,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.535,
      vote_count: 1183,
    },
    {
      adult: false,
      backdrop_path: "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      genre_ids: [28, 14, 10752],
      id: 856289,
      original_language: "zh",
      original_title: "封神第一部：朝歌风云",
      overview:
        "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      popularity: 570.321,
      poster_path: "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      release_date: "2023-07-20",
      title: "Creation of the Gods I: Kingdom of Storms",
      video: false,
      vote_average: 6.851,
      vote_count: 198,
    },
    {
      adult: false,
      backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 691.448,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.535,
      vote_count: 1183,
    },
    {
      adult: false,
      backdrop_path: "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      genre_ids: [28, 14, 10752],
      id: 856289,
      original_language: "zh",
      original_title: "封神第一部：朝歌风云",
      overview:
        "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      popularity: 570.321,
      poster_path: "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      release_date: "2023-07-20",
      title: "Creation of the Gods I: Kingdom of Storms",
      video: false,
      vote_average: 6.851,
      vote_count: 198,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      {datas.map((data) => (
        <MovieCard data={data} />
      ))}
    </div>
  );
};

export default MovieCards;
