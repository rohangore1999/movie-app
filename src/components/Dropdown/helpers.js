export const getSelectedGenreId = (updatedSelected) =>
  updatedSelected
    .filter((updatedSelectedObj) => updatedSelectedObj.active)
    .map((updatedSelectedObj) => updatedSelectedObj.value);
