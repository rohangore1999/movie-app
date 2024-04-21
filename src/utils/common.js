export function objectToQueryString(obj) {
  const queryString = Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        return `${key}=${value.join("&")}`;
      } else {
        return "";
      }
    })
    .filter(Boolean) // Filter out empty strings
    .join("&");

  return queryString;
}
