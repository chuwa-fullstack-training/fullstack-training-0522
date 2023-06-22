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

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/home.html') {
    fs.readFile('home.html', 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        // Parse the query string and get the submitted data
        const submittedData = query;
        
        // Replace the placeholders in the HTML content with the submitted data
        const updatedContent = content.replace('{{name}}', submittedData.name || '')
                                      .replace('{{age}}', submittedData.age || '');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(updatedContent);
      }
    });
  } else if (req.method === 'POST' && pathname === '/submit') {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      const submittedData = new URLSearchParams(body);
      
      // Redirect to home.html with the submitted data in the query string
      res.statusCode = 302;
      res.setHeader('Location', `/home.html?${submittedData.toString()}`);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
