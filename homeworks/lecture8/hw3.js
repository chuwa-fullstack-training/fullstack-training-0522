/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is the home page');
})

app.get('/about', (req, res) => {
    res.send('this is the about page');
})

app.get('/home.html', (req, res) => {
    // console.log(req.query);
    const titleshow = req.query?.title;
    const contentshow = req.query?.content;
    res.render('index', {'title' : titleshow, 'content' : contentshow});
})

app.post('/create-post', (req, res) => {
   const title = req.body?.title;
   const content = req.body?.content;
//    console.log(req.body);
//    console.log(`?title=${title}&content=${content}`);
   res.redirect('/home.html' + `?title=${title}&content=${content}`);
    
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});