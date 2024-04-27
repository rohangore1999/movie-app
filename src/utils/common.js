/**
 * The function `objectToQueryString` converts an object into a query string by mapping its key-value
 * pairs and handling arrays as query parameters.
 * @param obj - The `objectToQueryString` function takes an object as input and converts it into a
 * query string format. The object should have key-value pairs where the values can be either a single
 * value or an array of values.
 * @returns The `objectToQueryString` function returns a query string generated from the key-value
 * pairs of the input object `obj`. The function checks if the value of a key is an array with
 * elements, then it joins the elements with "&" and constructs a query string in the format
 * `key=value1&value2&value3`, filtering out any empty strings.
 */
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
