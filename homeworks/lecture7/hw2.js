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

// importing the modules
const http = require("http");
const url = require("url");

// create a local server to receive data from
const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true); // parse the url
  const iso = parsedURL.query.iso;

  if (parsedURL.pathname === "/api/parsetime") {
    const date = new Date(iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else if (parsedURL.pathname === "/api/unixtime") {
    const unixTime = new Date(iso).getTime();
    const response = {
      unixtime: unixTime,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end;
  }
});

// server start listening
server.listen(8000, () => {
  console.log("Server listening on port 8000");
});

// test: /api/parsetime
// http://localhost:8000/api/parsetime?iso=2023-05-22T12:34:56.789Z

// test: /api/unixtime
// http://localhost:8000/api/unixtime?iso=2023-05-22T12:34:56.789Z
