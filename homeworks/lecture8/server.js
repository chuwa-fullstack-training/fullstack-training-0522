const express = require('express');
const app = express();

const hw2 = require('./hw2');

app.use(hw2);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});