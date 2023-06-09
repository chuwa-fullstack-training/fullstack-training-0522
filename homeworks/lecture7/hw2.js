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
const URL = require('url');

const server = http.createServer((req, res) => {
      const { url, method } = req;
      if (method === 'GET') {
            var parseUrl = URL.parse(url);

            if (!parseUrl.path || !parseUrl.query) {
                  res.writeHead(400, { 'Content-Type': 'text/plain' });
                  res.end('Bad Request');
            }
            else if (parseUrl.pathname === '/api/parsetime') {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(parseTime(parseUrl.query)));
            } else if (parseUrl.pathname === '/api/unixtime') {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(unixTime(parseUrl.query)));
            } else {
                  res.writeHead(404, { 'Content-Type': 'text/plain' });
                  res.end('Not Found');
            }
      } else {
            res.writeHead(503, { 'Content-Type': 'text/plain' });
            res.end('Unsupported request');
      }
});

function parseTime(query) {
      let time = query.split('T')[1];
      const [hh, mm, ss] = time.split(':');
      return {
            "hour": +hh,
            "minute": +mm,
            "second": +(ss.split('.')[0])
      }
}

function unixTime(query) {
      let time = query.split('=')[1];
      const dateObj = new Date(time);
      const unixTime = dateObj.getTime();
      return { "unixtime": unixTime };
}

let port = 3000;
server.listen(port, () => {
      console.log(`Server is runing on port ${port}`);
})
