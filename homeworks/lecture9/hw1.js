// import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// mongodb+srv://jing_wang:12345@cluster0.wxtrb5b.mongodb.net/?retryWrites=true&w=majority
// connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://jing_wang:12345@cluster0.wxtrb5b.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => console.error("Cannot connect to the MongoDB server", err));

// destructure Schema
const { Schema } = mongoose;

// write the employee schema
const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: "Company" }, // refer to a Company doc
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: "Employee" }, // refer to another Employee doc
});

// write the company schema
const companySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }], // References to Employee documents
});

// create models
const Employee = mongoose.model("Employee", employeeSchema);
const Company = mongoose.model("Company", companySchema);

// start express application
const app = express();

// body-parser forparsing JSON bodies
app.use(bodyParser.json());

// create a new company
app.post("/companies", (req, res) => {
  const newCompany = new Company({
    name: req.body.name,
    description: req.body.description,
    headquarters: req.body.headquarters,
    industry: req.body.industry,
    employees: req.body.employees,
  });

  newCompany
    .save()
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(err));
});

// create a new employee
app.post("/employees", (req, res) => {
  const newEmployee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    company: req.body.company,
    startDate: req.body.startDate,
    jobTitle: req.body.jobTitle,
    resigned: req.body.resigned,
    salary: req.body.salary,
    manager: req.body.manager,
  });

  newEmployee
    .save()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json(err));
});

// get a company by id
app.get("/companies/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(err));
});

// get an employee by id
app.get("/employees/:id", (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json(err));
});

// update a company by id
app.put("/companies/:id", (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(err));
});

// update an employee by id
app.put("/employees/:id", (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json(err));
});

// delete a company by id
app.delete("/companies/:id", (req, res) => {
  Company.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: "Company deleted successfully" }))
    .catch((err) => res.status(400).json(err));
});

// delete an employee by id
app.delete("/employees/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: "Employee deleted successfully" }))
    .catch((err) => res.status(400).json(err));
});

// get all companies
app.get("/companies", (req, res) => {
  Company.find()
    .then((companies) => res.json(companies))
    .catch((err) => res.status(400).json(err));
});

// get all employees
app.get("/employees", (req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json(err));
});

// get all employees of a company
app.get("/companies/:id/employees", (req, res) => {
  Employee.find({ company: req.params.id })
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json(err));
});

// start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
