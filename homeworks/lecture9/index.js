const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
const express = require('express');
const app = express();
const { Employee, Company } = require('./schema');
const { getCompanyById, getEmployeeById } = require('./find-by-id');
const port = 3000;
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/getAllCompanies', async (req, res, next) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get('/getAllEmployees', async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get('/getCompanyById',getCompanyById);

app.get('/getEmployeeById', getEmployeeById);

app.post('/createCompany', (req, res, next) => {
  try {
    const company = new Company({
      name: req.body.name,
      description: req.body.description,
      headquarters: req.body.headquarters,
      industry: req.body.industry
    }); 
    company
      .save()
      .then(() => {
        console.log("company saved");
        res.send("company saved");
      })
      .catch(err => {
        console.log('Error saving company', err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.post('/createEmployee', async(req, res, next) => {
  try {
    const company = await Company.findById(req.body.company);
    const employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      resigned: Boolean(req.body.resigned),
      salary: Number(req.body.salary),
      company: company
    });
    employee
      .save()
      .then(() => {
        company.employees.push(employee);     // push will return newest length of array
        return company.save();
      })
      .then(() => {
        console.log('employee saved');
        res.send('employee saved')
      })  
      .catch(err => {
        console.log('Error saving employee', err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.post('/updateCompanyById', (req, res, next) => {
  const ID = req.body.id;
  let update = {}
  if (req.body.name) update.name = req.body.name;
  if (req.body.description) update.description = req.body.description;
  if (req.body.headquarters) update.headquarters = req.body.headquarters;
  if (req.body.industry) update.industry = req.body.industry;
  Company.findByIdAndUpdate(ID, update)
    .then(() => {
      res.send('company updated');
      console.log('company updated');
    })
    .catch(err => {
      console.log('Error updating company', err);
    })
});

app.post('/updateEmployeeById', (req, res, next) => {
  const ID = req.body.id;
  let update = {}
  if (req.body.firstName) update.firstName = req.body.firstName;
  if (req.body.lastName) update.lastName = req.body.lastName;
  if (req.body.startDate) update.startDate = new Date(req.body.startDate);
  if (req.body.jobTitle) update.jobTitle = req.body.jobTitle;
  if (req.body.resigned) update.resigned = Boolean(req.body.resigned);
  if (req.body.salary) update.salary = Number(req.body.salary);
  console.log("jobTitle: ", req.body.jobTitle);
  console.log("update: ", update);
  Employee.findByIdAndUpdate(ID, update)
    .then(() => {
      res.send('employee updated');
      console.log('employee updated');
    })
    .catch(err => {
      console.log('Error updating employee', err);
    })
});

app.delete('/deleteCompanyById', (req, res, next) => {
  const ID = req.body.id;
  console.log(ID);
  Company.findByIdAndDelete(ID)
    .then(deletedCompany => {
      res.send('company deleted');
      console.log('company deleted', deletedCompany);
    })
    .catch(err => {
      console.log('Error deleting company', err);
    })
});

app.delete('/deleteEmployeeById', async (req, res, next) => {
  const ID = req.body.id;
  const employee = await Employee.findById(ID);

// using filter to delete from employees array
  // let company = await Company.findOne({ _id: employee.company });
  // const deletedEmployees = company.employees.filter(each => !each.equals(employee._id));
  // await Company.findByIdAndUpdate(employee.company, { employees: deletedEmployees });

// using $pull method to delete from employees array
  await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });
    
  Employee.findByIdAndDelete(ID)
    .then(deletedEmployee => {
      res.send('employee deleted');
      console.log('employee deleted: ', deletedEmployee);
    })
    .catch(err => {
      console.log('Error deleting employee', err);
    })
});

app.get('/getAllEmployeesOfCompany', async (req, res, next) => {
  try {
    const companyId = req.query?.companyId;
    const company = await Company.findById(companyId);
    const employeesOfCompanyPromises = company.employees.map(each => Employee.findById(each));
    const employeesOfCompany = await Promise.all(employeesOfCompanyPromises);
    res.json(employeesOfCompany);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));