const express = require('express');
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee');
const employeeRouter = express.Router();

employeeRouter.get('/employees', getAllEmployees);
employeeRouter.get('/employees/:id', getOneEmployee);
employeeRouter.post('/employees', createEmployee);
employeeRouter.put('/employees/:id', updateEmployee);
employeeRouter.delete('/employees/:id', deleteEmployee);

module.exports = employeeRouter;
