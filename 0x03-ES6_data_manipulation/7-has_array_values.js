
export default function hasValuesFromArray(set, array) {
  // Convert the set to an array for easier comparison
  const setArray = Array.from(set);

  // Check if every element in the input arrayt exists in the set
  return array.every((value) => setArray.includes(value));
}

