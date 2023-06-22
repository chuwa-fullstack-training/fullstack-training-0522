/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 *
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 *
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */
// here we only catch the first hit of the two queries
// import modules
const express = require("express");
const https = require("https");
const router = express.Router();

port = 3000;
app = express();

// define route
router.get("/hw2", (req, res) => {
  // extract query params
  const { query1, query2 } = req.query;

  // define the function to get data from the api
  const getHnData = (query) =>
    new Promise((resolve, reject) => {
      // make get request
      https
        .get(
          `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`,
          (response) => {
            // initialize an empty string to accumulate data chunks
            let data = "";
            response.on("data", (chunk) => {
              data += chunk;
            });
            // parse received data and resolve the promise with the first hit
            response.on("end", () => resolve(JSON.parse(data).hits[0]));
          }
        )
        // error handling
        .on("error", reject);
    });

  // wait for the 2 promises to resolve
  Promise.all([getHnData(query1), getHnData(query2)])
    .then(([result1, result2]) => {
      // send data back
      res.json({
        [query1]: {
          created_at: result1.created_at,
          title: result1.title,
        },
        [query2]: {
          created_at: result2.created_at,
          title: result2.title,
        },
      });
    })
    // error handling
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred.");
    });
});

app.use("/", router);
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${port}`);
});
