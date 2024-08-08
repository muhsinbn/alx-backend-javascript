// A function that returns a promise rejecting with an Error and the string
export default function uploadPhoto(filename) {
  return new Promise((_, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
