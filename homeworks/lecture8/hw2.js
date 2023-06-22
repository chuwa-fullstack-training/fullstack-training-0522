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

//v1/search?
const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require('axios');
const url = require('url');


const app = express();
const router = express.Router();

router.get('/hw2', async (req, res) => {
    const query = req.query;
    const query1 = req.query?.query1;
    const query2 = req.query?.query2;
    let result = {};

    let hnUrl1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
    let hnUrl2 = 'https://hn.algolia.com/api/v1/search?' + `query=${query2}&tags=story`;

    let res1 = await axios.get(hnUrl1);
    let res2 = await axios.get(hnUrl2);
    //console.log(res1.data.hits);
    let res1Props = res1.data?.hits[0];
    let res2Props = res2.data?.hits[0];

    const res1name = `${query1}`;
    const res2name = `${query2}`;
    result = {
        [res1name] : {
            'created_at' : res1Props.created_at,
            'title' : res1Props.title
        },
        [res2name] : {
            'created_at': res2Props.created_at,
            'title': res2Props.title
        }
    }

    console.log(result);
})

app.use('/', router);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});