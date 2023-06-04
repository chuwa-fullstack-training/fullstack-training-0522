/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {Promise[]} - a promise that resolves to an array of the responses
 */

const https = require("https");
async function sequencePromise(urls) {
  const results = [];
  async function fetchOne(url) {
    return getJSON(url).then((response) => results.push([url,response]));
  }
  // implement your code here
  for (let url of urls) {
    await fetchOne(url);
  }
  console.log(666, results);
  return results;
}

function getJSON(url) {
  // this is from hw5
  request = new Promise((resolve, reject) => {
    // reject(url + "unfinished");
    https.get(url, (response) => {
    if (response.statusCode !== 200) {
      reject(
        new Error(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        )
      );
      response.resume();
    }
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });
          response.on("end", () => {
            try {
              // When the response body is complete, we can parse it and log it to the console
              resolve(JSON.parse(data));
            } catch (e) {
              // If there is an error parsing JSON, log it to the console and throw the error
              reject(new Error(e.message));
            }
          });
        })
        .on("error", (err) => {
          reject(
            new Error(
              `Encountered an error trying to make a request: ${err.message}`
            )
          );
        });
  });
  return request
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.message;
    });
}

// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];

sequencePromise(urls);
