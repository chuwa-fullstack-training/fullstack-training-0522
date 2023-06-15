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
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const iso = parsedUrl.query.iso;

  if (parsedUrl.pathname === '/api/parsetime') {
    const date = new Date(iso);
    const responseJson = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    sendJsonResponse(res, responseJson);
  } else if (parsedUrl.pathname === '/api/unixtime') {
    const unixTime = new Date(iso).getTime();
    const responseJson = {
      unixtime: unixTime
    };
    sendJsonResponse(res, responseJson);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

function sendJsonResponse(res, jsonData) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonData));
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});