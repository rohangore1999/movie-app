export const modifyGenresList = (genresList) => {
  return genresList.map((genre, idx) => ({
    key: idx + 1,
    text: genre.name,
    value: genre.id,
  }));
};
