/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
      res.send('this is the home page');
});

app.get('/about', (req, res) => {
      res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
      if (Object.keys(req.query).length) {
            const title = req.query.title;
            const content = req.query.content;
            res.render('home-output', { t: title, c: content });
      } else {
            res.render('home');
      }
});

app.post('/create-post', (req, res) => {
      const { title, content } = req.body;
      res.redirect(`/home.html?title=${title}&content=${content}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));