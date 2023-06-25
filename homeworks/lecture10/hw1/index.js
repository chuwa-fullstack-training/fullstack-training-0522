const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config();

const connect = require('./db/connect');
const companiesRouter = require('./routers/companiesRouter');
const employeesRouter = require('./routers/employeesRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect();

// Routes
app.use('/api', companiesRouter);
app.use('/api', employeesRouter);

app.listen(PORT, function(){
    console.log('App listening on port 3000!');
});