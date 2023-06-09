/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {Promise[]} - a promise that resolves to an array of the responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here

  // using async/await:
  // for (const url of urls) {
  //   const response = await getJSON(url);
  //   results.push(response);
  // }
  // return results;

  // using reduce function:
  return urls.reduce((promiseChain, currentUrl) => {
    return promiseChain.then(() => fetchOne(currentUrl));
  }, Promise.resolve()).then(() => results);
}

function getJSON(url) {
  // this is from hw5
  const https = require('https');
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };
  return new Promise((resolve, reject) => {
    https.get(url, options, response => {
      if (response.statusCode !== 200) {
        reject(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        );
        response.resume();
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          // When the response body is complete, we can parse it and resolve the Promise
          resolve(JSON.parse(data));
        } catch (e) {
          // If there is an error parsing JSON, reject the Promise
          reject(e.message);
        }
      });
    }).on('error', err => {
      reject(`Encountered an error trying to make a request: ${err.message}`);
    });
  });
}

// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls).then(res => console.log(res));