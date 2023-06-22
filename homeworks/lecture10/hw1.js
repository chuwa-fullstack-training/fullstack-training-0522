const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create the Company schema
const companySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

// Create the Employee schema
const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

// Create the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

// Create the Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/<database>',
 { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// API endpoints
// Create a new company
app.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    console.error('Error creating company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new employee
app.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (err) {
    console.error('Error creating employee:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a company by id
app.get('/companies/:companyId', async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId).populate('employees');
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    console.error('Error getting company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get an employee by id
app.get('/employees/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId).populate('company');
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error('Error getting employee:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a company by id
app.put('/companies/:companyId', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    console.error('Error updating company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an employee by id
app.put('/employees/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a company by id
app.delete('/companies/:companyId', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error('Error deleting company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an employee by id
app.delete('/employees/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all companies
app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    console.error('Error getting companies:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error('Error getting employees:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all employees of a company
app.get('/companies/:companyId/employees', async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId).populate('employees');
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company.employees);
  } catch (err) {
    console.error('Error getting employees of company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
