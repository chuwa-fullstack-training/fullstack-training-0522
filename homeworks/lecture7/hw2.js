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

const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (method === 'GET') {
        let urlObj = new URL(url, 'http://localhost');
        if (urlObj.pathname === '/api/parsetime') {
            let date = new Date(urlObj.searchParams.get('iso'));
            res.writeHead(200, { contentType: 'application/json' });
            res.end(JSON.stringify({ hour: date.getUTCHours(), minuite: date.getUTCMinutes(), second: date.getUTCSeconds() }));
        } else if (urlObj.pathname === '/api/unixtime') {
            res.writeHead(200, { contentType: 'application/json' });
            res.end(JSON.stringify({ unixtime: Date.parse(urlObj.searchParams.get('iso')) }));
        } else {
            //404
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
