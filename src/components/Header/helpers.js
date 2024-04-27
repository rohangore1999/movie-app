/**
 * The function `modifyGenresList` takes an array of genres and returns a new array with modified
 * objects containing keys for index, text, and value.
 * @param genresList - GenresList is an array of objects containing information about different genres.
 * Each object in the array has properties like "name" and "id" that represent the name and unique
 * identifier of a genre, respectively.
 * @returns The `modifyGenresList` function is returning a new array created by mapping over the
 * `genresList` array. Each element in the new array is an object with three properties: `key` (index +
 * 1), `text` (genre name), and `value` (genre id).
 */
export const modifyGenresList = (genresList) => {
  return genresList.map((genre, idx) => ({
    key: idx + 1,
    text: genre.name,
    value: genre.id,
  }));
};
