/**
 * The function `getGenresMapping` takes a list of genres and returns an object mapping genre IDs to
 * their corresponding names.
 * @param genresList - GenresList is an array of objects where each object represents a genre and has
 * properties like id and name. The function `getGenresMapping` takes this array as input and returns
 * an object where the genre ids are used as keys and the genre names are used as values.
 */
export const getGenresMapping = (genresList) =>
  genresList.reduce(
    (accumulator, curValue) => ({
      ...accumulator,
      [curValue.id]: curValue.name,
    }),
    {}
  );
