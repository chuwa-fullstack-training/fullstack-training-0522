const express = require('express');
const app = express();
const port = 3000;

const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');
const dbconnection = require('./dbconnection');

// Connect to DB
dbconnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/hw1/api', companyRouter);
app.use('/hw1/api', employeeRouter);

app.listen(port, () => {
      console.log(`Server running in Port: ${port}`);
})
