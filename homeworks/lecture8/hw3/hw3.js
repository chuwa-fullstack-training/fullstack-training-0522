/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('plain', { title: 'this is the home page'});
});

app.get('/about', (req, res) => {
    res.render('plain', { title: 'this is the about page'});
  });

app.get('/home.html', (req, res) => {
    res.render('mvc');
});

app.get('*', (req, res) => {
  res.send('this is the 404 page');
});

app.post('/home.html', (req,res)=>{
    console.log(req.body);
    const { name, email } = req.body;
    const newUser = { name, email };
    res.sendFile(newUser);
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));