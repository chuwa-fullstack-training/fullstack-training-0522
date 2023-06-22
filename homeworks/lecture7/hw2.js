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
  const { pathname, query } = parsedUrl;

  if (pathname === '/api/parsetime') {
    const iso = query.iso;
    const date = new Date(iso);
    const responseObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    const jsonResponse = JSON.stringify(responseObj);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonResponse);
  } else if (pathname === '/api/unixtime') {
    const iso = query.iso;
    const date = new Date(iso);
    const responseObj = {
      unixtime: date.getTime()
    };
    const jsonResponse = JSON.stringify(responseObj);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonResponse);
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
