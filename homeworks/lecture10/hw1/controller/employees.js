const Employee = require("../models/employee");
const Company = require("../models/company");

const createNewEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Cannot create employee" });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Cannot get employee" });
  }
};

const updateEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Cannot update employee" });
  }
};

const deleteEmployeeId = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee delete successfully" });
  } catch (error) {
    res.status(500).json({ error: "Cannot delete employee" });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Cannot get employees" });
  }
};

const getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Cannot get employees of the company" });
  }
};

module.exports = {
  createNewEmployee,
  getEmployeeById,
  getEmployeesByCompany,
  getAllEmployees,
  updateEmployeeById,
  deleteEmployeeId,
};
