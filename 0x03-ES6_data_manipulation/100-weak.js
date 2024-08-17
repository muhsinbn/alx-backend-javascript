// Export a WeakMap instance named 'weakMap'
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and returns the response.
 *
 * @param {Object} endpoint - The API endpoint to query.
 * @param {string} endpoint.protocol - The protocol to use for the API request.
 * @param {string} endpoint.name - The name of the API endpoint.
 * @returns {Promise<any>} - The response from the API.
 * @throws {Error} - Throws an error with the message "Endpoint load is high"
 * if the number of queries for the endpoint is greater than or equal to 5.
 */
export function queryAPI(endpoint) {
  // Destructure the endpoint object
  const { protocol, name } = endpoint;

  // Create the URL for the API request
  const url = `${protocol}://api.example.com/${name}`;

  // Check if the endpoint is already in the weakMap
  let queryCount = weakMap.get(endpoint);

  // If the endpoint is not in the weakMap, set the initial query count to 1
  if (!queryCount) {
    queryCount = 1;
    weakMap.set(endpoint, queryCount);
  } else {
    // If the endpoint is in the weakMap, increment the query count
    weakMap.set(endpoint, queryCount + 1);
    queryCount += 1;
  }

  // If the query count is greater than or equal to 5, throw an error
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Make the API request using the fetch API
  /* eslint-disable-next-line no-undef */
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(`Error querying API: ${error}`));
}
