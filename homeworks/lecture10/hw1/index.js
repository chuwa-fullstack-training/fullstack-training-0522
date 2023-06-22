const express = require("express");
const app = express();

const companyRouter = require("./routes/companies");
const employeeRouter = require("./routes/employees");
const connectToDB = require("./db");
connectToDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/hw1/api", companyRouter);
app.use("/hw1/api", employeeRouter);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
