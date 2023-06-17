/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here

const http = require('http');
const fs = require('fs');
const path = require('path');
const url_ = require('url');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET') {
    if (url === '/') {
      res.end('this is the home page');
    } else if (url.startsWith('/api/parsetime')) {
      res.writeHead(200, { contentType: 'application/json' });
      let urlObject = url_.parse(url, true);
      const date = new Date(urlObject.query.iso);
      let result = {
        hour: date.getUTCHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
      console.log(result);
      res.end();
    } else if (url.startsWith('/api/unixtime')) {
      res.writeHead(200, { contentType: 'application/json' });
      let urlObject = url_.parse(url, true);
      const date = new Date(urlObject.query.iso);
      let result = {
        unixtime: date.getTime(),
      };
      console.log(result);
      res.end();
    } else {
      res.end('this is the 404 page');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
