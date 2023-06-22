const express = require("express");
const app = express();
const port = 3000;
const { companyRouter } = require("./routers/companyRouter");
const { employeeRouter } = require("./routers/employeeRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//http://localhost:3000/company/create
//http://localhost:3000/company/search/:id
//http://localhost:3000/company/search
//http://localhost:3000/company/update/:id
//http://localhost:3000/company/delete/:id
app.use("/company", companyRouter);

//http://localhost:3000/employee/create
//http://localhost:3000/employee/search/:id
//http://localhost:3000/employee/search
//http://localhost:3000/employee/update/:id
//http://localhost:3000/employee/delete/:id
//http://localhost:3000/employee/search-by-company/:id
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
