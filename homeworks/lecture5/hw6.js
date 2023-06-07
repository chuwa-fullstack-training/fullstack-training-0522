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
  const promises = [];
  for(let url of urls) {
    promises.push(fetchOne(url));
  }
  Promise.all(promises)
    .then(res => console.log(results))
    .catch(err => console.log(err));
}

function getJSON(url) {
  // this is from hw5
  const https = require('https');

  const p = new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };

    const request = https.get(url, options, response => {
        if(response.statusCode !== 200) reject(`Did not get an OK from the server. Code: ${response.statusCode}`);

        let data = '';
        response.on('data', chunk => {
          data += chunk;
        });
        response.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch(e) {
            throw new Error(e.message);
          }
        });
    });

    request.on('error', err => {
      reject(err);
    })
  });

  return p;
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

sequencePromise(urls);