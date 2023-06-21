/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (pathname === '/') {
      fs.readFile('home.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          const queryData = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
          const updatedData = data.replace('__QUERY_DATA__', queryData);

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(updatedData);
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else if (req.method === 'POST') {
    if (pathname === '/submit') {
      let body = '';
      
      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', () => {
        const submittedData = new URLSearchParams(body).toString();
        const redirectUrl = `/home.html?${submittedData}`;

        res.statusCode = 302;
        res.setHeader('Location', redirectUrl);
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});