/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {Promise[]} - a promise that resolves to an array of the responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    return getJSON(url).then((response) => results.push(response));
  }
  // implement your code here
  // here we use `Promise.allSettled()`
  // The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
  const promises = urls.map((url) => results.push(fetchOne(url))); // get all the results from each url
  promises
    .allSettled(results)
    .then((allResults) => console.log(allResults))
    .catch((error) => console.log(error.message));
}

// from hw5
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        const error = new Error(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        );
        response.resume();
        reject(error);
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(e.message);
        }
      });
    });

    request.on("error", (err) => {
      const er = new Error(
        `Encountered an error trying to make a request: ${err.message}`
      );
      reject(er);
    });
  });
}

// function getJSON(url) {
//   return fetch(url).then((res) => res.json());
// }

// test your code
const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];
sequencePromise(urls);
