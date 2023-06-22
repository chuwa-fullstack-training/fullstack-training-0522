const express = require('express');
const mongoose = require('mongoose');
const Company = require('./models/Company'); // new
const Employee = require('./models/Employee'); // new

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/<database>',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

// Get all companies
app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all employees of a company
app.get('/companies/:companyId/employees', async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params?.companyId });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new company
app.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).send(company);
  } catch (error) {
    res.status(404).json({ error: 'Failed to create company' });
  }
});

// Create a new employee
app.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).send(employee);
  } catch (error) {
    res.status(404).json({ error: 'Failed to create employee' });
  }
});

// Get a company by id
app.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findOne(req.params?.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.send(company);
  } catch {
    res.status(404).json({ error: 'company does not exist' });
  }
});

// Get an employee by id
app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne(req.params?.id);
    if (!employee) {
      return res.status(404).json({ error: 'employee not found' });
    }
    res.send(employee);
  } catch {
    res.status(404).json({ error: 'employee does not exist' });
  }
});

// Update a company by id
app.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    await company.save();
    res.json(company);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update company' });
  }
});

// Update an employee by id
app.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
      {
        new: true,
      }
    );
    if (!employee) {
      return res.status(404).json({ error: 'employee not found' });
    }
    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update employee' });
  }
});

// Delete a company by id
app.delete('/companies/:id', async (req, res) => {
  try {
    await Company.deleteOne(req.params?.id);
    res.status(204).send();
  } catch {
    res.status(404).json({ error: 'Failed to delete company' });
  }
});

// Delete an employee by id
app.delete('/employees/:id', async (req, res) => {
  try {
    await Employee.deleteOne(req.params?.id);
    res.status(204).send();
  } catch {
    res.status(404).json({ error: 'Failed to delete employee' });
  }
});

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
