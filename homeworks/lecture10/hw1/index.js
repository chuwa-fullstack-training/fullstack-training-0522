const express = require('express');

const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');

const connect = require('./connect');
const app = express();
const port = 3000;

connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/hw1/api', companyRouter);
app.use('/hw1/api', employeeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});