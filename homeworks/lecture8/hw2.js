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

const https = require('https');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

app.use('/hw2', router);

// http://localhost:3000/hw2?query1=apple&query2=banana
router.get('/', async (req, res) => {
      const query1 = req.query.query1;
      const query2 = req.query.query2;
      console.log(`query1: ${query1}, query2: ${query2}`);

      const data = {};

      try {
            const response1 = await httpsGet(query1);
            data[query1] = JSON.parse(response1).hits;

            const response2 = await httpsGet(query2);
            data[query2] = JSON.parse(response2).hits;

            console.log(data);
            res.json(data);
      } catch (error) {
            throw new Error(error);
      }
});

function httpsGet(query) {
      const apiUrl = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
      console.log(apiUrl);

      return new Promise((resolve, reject) => {
            const request = https.get(apiUrl, res => {
                  let data = '';
                  res.on('data', chunk => {
                        data += chunk;
                  });
                  res.on('end', () => resolve(data));
            });
            request.on('error', error => reject(error));
            request.end();
      });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));