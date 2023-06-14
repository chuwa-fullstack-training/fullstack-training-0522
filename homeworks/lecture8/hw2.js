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

const { log } = require('console');
const express = require("express");
const app = express();
const port = 3000;

app.get("/hw2", async (req, res, next) => {
    // log("req.query: ", req.query);
    let mergeRes = {};
    for (let queryString of Object.values(req.query)) {
        let hnAPI = `https://hn.algolia.com/api/v1/search?query=${queryString}&tags=story`;
        // log("hnAPI", hnAPI);
        let fetchRes = await fetch(hnAPI).then(res => res.json()).then(res => res.hits[0]);     // .json() to get resolved Promise Object
                                                                                                // hits is a property of the resolved value, not the promise itself
        let fetchObj = {
            created_at: fetchRes.created_at,
            title: fetchRes.title
        }
        mergeRes[queryString] = fetchObj;
    }
    log(mergeRes);
    res.send(mergeRes);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));