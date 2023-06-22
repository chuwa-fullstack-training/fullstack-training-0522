const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/<database>', {
        useNewUrlParser: true,
        useUnifiedTopology: true
  })
  .then(() => {
        console.log('Connected to MongoDB');
  })
  .catch(err => {
        console.log('Error connecting to MongoDB', err);
  });

// Define schemas
const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

// Define models
const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);

// Middleware
app.use(express.json());

// Routes
// Add a company
app.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create company' });
  }
});

// Add an employee
app.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// Get company by id
app.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get company' });
  }
});

//Get employee by id
app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get employee' });
  }
});

// Update a company by id
app.put('/companies/:id', async (req, res) => {
    try {
      const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update company' });
    }
  });
  
// Update an employee by id
app.put('/employees/:id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update employee' });
    }
  });
  
// Delete a company by id
app.delete('/companies/:id', async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete(req.params.id);
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      // Also delete associated employees
      await Employee.deleteMany({ company: company._id });
      res.json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete company' });
    }
  });
  
// Delete an employee by id
app.delete('/employees/:id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete employee' });
    }
  });
  
// Get all companies
app.get('/companies', async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get companies' });
    }
  });
  
// Get all employees
app.get('/employees', async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get employees' });
    }
  });
  
// Get all employees of a company
app.get('/companies/:companyId/employees', async (req, res) => {
    try {
      const employees = await Employee.find({ company: req.params.companyId });
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get employees of the company' });
    }
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
