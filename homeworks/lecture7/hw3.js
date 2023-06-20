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
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (req.method === 'GET' && pathname === '/') {
    // Serve the home.html page
    fs.readFile('home.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        // Write the HTML content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && pathname === '/create-post') {
    // Handle form submission
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      // Redirect to home.html with the query string
      const parseString = Buffer.concat(body).toString();
      res.statusCode = 302;
      res.setHeader('Location', `/home.html?${parseString}`);

      res.end();
    });
  } else if (pathname === '/home.html') {
    // Serve the home.html page with the submitted data
    fs.readFile('home.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        // Append the query string to the HTML content
        const queryString = querystring.stringify(query);
        const htmlContent = data.replace(
          '</body>',
          `<p>Submitted Data: ${queryString}</p></body>`
        );
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on port ${port}`);
});
