const Employee = require("../models/employee");

// create a new employee
const createNewEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create employee" });
  }
};

// get an employee by id
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get employee" });
  }
};

// update an employee by id
const updateEmployeeByID = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update employee" });
  }
};

// delete an employee by id
const deleteEmployeeID = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete employee" });
  }
};

// get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get employees" });
  }
};

// get all employees of a company
const getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.json(employees);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to get employees of the given company" });
  }
};

module.exports = {
  createNewEmployee,
  getEmployeeById,
  getEmployeesByCompany,
  getAllEmployees,
  updateEmployeeByID,
  deleteEmployeeID,
};
