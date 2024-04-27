export const getGenresMapping = (genresList) =>
  genresList.reduce(
    (accumulator, curValue) => ({
      ...accumulator,
      [curValue.id]: curValue.name,
    }),
    {}
  );
