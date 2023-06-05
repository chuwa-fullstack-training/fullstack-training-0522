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
