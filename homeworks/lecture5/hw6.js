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
  function fetchAll(index) {
    if (index < urls.length) {
      return fetchOne(urls[index]).then(() => fetchAll(index + 1));
    }
    return Promise.resolve(results);
  }
  return fetchAll(0);
}

const https = require('https');
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request',
      },
    };
    const request = https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        reject(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        );
        response.resume();
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          // When the response body is complete, we can parse it and log it to the console
          resolve(JSON.parse(data));
        } catch (e) {
          // If there is an error parsing JSON, log it to the console and throw the error
          reject(e.message);
        }
      });
    });
    request.on('error', (err) => {
      reject(`Encountered an error trying to make a request: ${err.message}`);
    });
  });
}

// function getJSON(url) {
//   return fetch(url).then((res) => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs',
];

sequencePromise(urls).then((res) => console.log(res));
