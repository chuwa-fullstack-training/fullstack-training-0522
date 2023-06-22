const employee = require('../models/employee');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get an employee by id
const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create an new employee
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    await employee.save();
    res.status(201).json({ message: 'employee created' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an employee by id
const updateEmployee = async (req, res) => {
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
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an employee by id
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'employee deleted' });
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
