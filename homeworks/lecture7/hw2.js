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
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true);
    if (req.url.startsWith("/api/parsetime")) {
      const [hour, minute, second] = parsedUrl.query.iso
        .split("T")[1]
        .split(".")[0]
        .split(":");
      const time = { hour, minute, second };
      res.writeHead(200, { contentType: "application/json" });
      res.end(JSON.stringify(time));
    } else if (req.url.startsWith("/api/unixtime")) {
      const time = { unixtime: new Date(parsedUrl.query.iso).getTime() };
      res.writeHead(200, { contentType: "application/json" });
      res.end(JSON.stringify(time));
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
