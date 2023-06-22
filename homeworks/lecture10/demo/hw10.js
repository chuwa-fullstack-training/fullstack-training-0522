const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
require('dotenv').config();

// connect with .env
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

// Define Company schema
const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  _employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }]
});

// Define Employee schema
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

// Define Company model
const Company = mongoose.model('Company', companySchema);

// Define Employee model
const Employee = mongoose.model('Employee', employeeSchema);

// Create Express app
const app = express();
app.use(bodyParser.json());

// Create a new company
app.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a new employee
app.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a company by id
app.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get an employee by id
app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('manager');
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a company by id
app.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an employee by id
app.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a company by id
app.delete('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (company) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an employee by id
app.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (employee) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all companies
app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees of a company
app.get('/companies/:id/employees', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (company) {
      res.json(company._employees);
    } else {
      res.status(404).json({ error: 'Company not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
