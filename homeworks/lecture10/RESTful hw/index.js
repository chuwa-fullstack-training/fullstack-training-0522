const express = require("express");
const app = express();
const port = 3000;
const { companyRouter } = require("./routers/companyRouter");
const { employeeRouter } = require("./routers/employeeRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/company", companyRouter);

app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});