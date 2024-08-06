// Function to demonstrate the use of const
export function taskFirst() {
  // Declaring task with const as its value will not change
  const task = 'I prefer const when I can.';
  return task;
}

// Function to return a static string
export function getLast() {
  return ' is okay';
}

// Function to demonstrate the use of let
export function taskNext() {
  // Declaring combination with let as its value will be modified
  let combination = 'But sometimes let';
  // Concatenating the result of getLast to combination
  combination += getLast();

  return combination;
}

