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
    const parsedUrl = url.parse(req.url);
    let method = parsedUrl.pathname;
    let timestr = parsedUrl.query;
    let searchParams = new URLSearchParams(timestr);
    let isostr = searchParams.get("iso");
    let result;
    
    if (method === '/api/parsetime') {
      let time = isostr.substring(11, 19).split(':', 3);

      result = {
        hour: parseInt(time[0]),
        minute: parseInt(time[1]),
        second: parseInt(time[2])
      };
      //console.log(JSON.stringify(result));
    }
    else if (method === '/api/unixtime'){
      let date = new Date (isostr);
      result = {
        unixtime: date.getTime()
      }
      //console.log(date.getTime()); 
      
    }

    res.writeHead(200, { contentType: 'application/json' });
    res.end(JSON.stringify(result));

    
  });
  
  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  
