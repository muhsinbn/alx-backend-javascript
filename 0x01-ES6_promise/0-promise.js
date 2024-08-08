function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = { data: 'This is the response from the API' };
      resolve(response);
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
