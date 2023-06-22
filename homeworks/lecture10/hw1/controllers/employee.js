const Employee = require('../models/employee');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    // find the user and update at the same time
    const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body);

    // save the user
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' })
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};