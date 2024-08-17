
/**
 * Updates the quantities of items with an initial quantity of 1 to 100
 * in the provided map.
 *
 * @param {Map} map - The map of grocery items and their quantities.
 * @returns {Map} - The updated map with quantities of items with initial quantity of 1 set to 100
 * @throws {Error} - Throws an error with the message "Cannot process" if the input is not a map.
 */
export default function updateUniqueItems(map) {
  // Check if the input is a Map object
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries in the map
  for (const [item, quantity] of map) {
    // check if the quantity is 1
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
  return map;
}

