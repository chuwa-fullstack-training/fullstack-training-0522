const express = require("express");
const app = express();

const companyRouter = require("./routers/companies");
const employeeRouter = require("./routers/employees");

// connect to mongoose
const connectToDB = require("./database/connect");
connectToDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/hw1/api", companyRouter);
app.use("/hw1/api", employeeRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
