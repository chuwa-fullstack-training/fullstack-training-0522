const express = require("express");

const {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
  } = require('../controllers/employee');
  const employeeRouter = express.Router();

  // CREATE A EMPLOYEE
  employeeRouter.post('/employees', createEmployee);
  // GET ALL EMPLOYEES
  employeeRouter.get('/employees',getAllEmployees);
  // GET ONE EMPLOYEE
  employeeRouter.get('/employees/:id',getOneEmployee);
  // UPDATE EMPLOYEE
  employeeRouter.put('/employees/:id', updateEmployee);
  // DELETE EMPLOYEE
  employeeRouter.delete('/employees/:id', deleteEmployee);

  module.exports = employeeRouter;
