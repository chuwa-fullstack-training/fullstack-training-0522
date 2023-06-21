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
const http = require("http");
const fs = require("fs");
const URL = require("url");
const querystring = require("querystring");
const path = require("path");

const server = http.createServer((req, res) => {
  const parsedURL = URL.parse(req.url, true); // returns a URL object
  // console.log(parsedURL);
  const pathname = parsedURL.pathname; // e.g: `/home.html`, `/about`, `/`
  const queryObj = parsedURL.query; // e.g:{name: 'John', age: '20'}

  if (req.method === "GET") {
    if (pathname === "/") {
      res.end("this is the home page");
    } else if (pathname === "/about") {
      res.end("this is the about page");
      // render home.html page with the query data, if there is any
    } else if (pathname === "/home.html") {
      // with out `utf8`, we cannot use `html.replace`
      fs.readFile(path.join(__dirname, "home.html"), "utf8", (err, html) => {
        if (err) {
          res.end("Error");
        } else {
          const queryString = querystring.stringify(queryObj);
          const updatedHTML = html.replace(
            "</body>",
            `<p>Submitted Data: ${queryString}</p></body>`
          );
          // write html
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(updatedHTML);
        }
      });
    }
  } else if (req.method === "POST") {
    if (pathname === "/create-post") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        // Redirect to home.html with the query string
        const parsedBody = Buffer.concat(body).toString();
        res.statusCode = 302;
        res.setHeader("Location", `/home.html?${parsedBody}`);
        res.end();
      });
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
