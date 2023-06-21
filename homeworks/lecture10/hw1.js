const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/companydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Create the Company schema
const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

// Create the Employee schema
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

// Create the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

// Create Express app
const app = express();
app.use(express.json());

// Create a new company
app.post('/api/companies', (req, res) => {
  const { name, description, headquarters, industry } = req.body;
  const newCompany = new Company({ name, description, headquarters, industry });

  newCompany.save()
    .then(company => res.status(201).json(company))
    .catch(error => res.status(500).json({ error: 'Failed to create a new company' }));
});

// Create a new employee
app.post('/api/employees', (req, res) => {
  const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;
  const newEmployee = new Employee({ firstName, lastName, company, startDate, jobTitle, resigned, salary, manager });

  newEmployee.save()
    .then(employee => res.status(201).json(employee))
    .catch(error => res.status(500).json({ error: 'Failed to create a new employee' }));
});

// Get a company by id
app.get('/api/companies/:companyId', (req, res) => {
  Company.findById(req.params.companyId)
    .populate('employees')
    .then(company => {
      if (company) {
        res.json(company);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to get the company' }));
});

// Get an employee by id
app.get('/api/employees/:employeeId', (req, res) => {
  Employee.findById(req.params.employeeId)
    .populate('company')
    .populate('manager')
    .then(employee => {
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to get the employee' }));
});

// Update a company by id
app.put('/api/companies/:companyId', (req, res) => {
  const { name, description, headquarters, industry } = req.body;

  Company.findByIdAndUpdate(req.params.companyId, { name, description, headquarters, industry }, { new: true })
    .then(company => {
      if (company) {
        res.json(company);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to update the company' }));
});

// Update an employee by id
app.put('/api/employees/:employeeId', (req, res) => {
  const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;

  Employee.findByIdAndUpdate(req.params.employeeId, { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager }, { new: true })
    .then(employee => {
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to update the employee' }));
});

// Delete a company by id
app.delete('/api/companies/:companyId', (req, res) => {
  Company.findByIdAndDelete(req.params.companyId)
    .then(company => {
      if (company) {
        res.json({ message: 'Company deleted successfully' });
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to delete the company' }));
});

// Delete an employee by id
app.delete('/api/employees/:employeeId', (req, res) => {
  Employee.findByIdAndDelete(req.params.employeeId)
    .then(employee => {
      if (employee) {
        res.json({ message: 'Employee deleted successfully' });
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Failed to delete the employee' }));
});

// Get all companies
app.get('/api/companies', (req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(error => res.status(500).json({ error: 'Failed to get companies' }));
});

// Get all employees
app.get('/api/employees', (req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(error => res.status(500).json({ error: 'Failed to get employees' }));
});

// Get all employees of a company
app.get('/api/companies/:companyId/employees', (req, res) => {
  Employee.find({ company: req.params.companyId })
    .then(employees => res.json(employees))
    .catch(error => res.status(500).json({ error: 'Failed to get employees' }));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});