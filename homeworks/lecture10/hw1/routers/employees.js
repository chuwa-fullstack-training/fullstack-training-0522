const express = require('express');
const {
      createNewEmployee,
      getEmployeeById,
      getEmployeesByCompany,
      getAllEmployees,
      updateEmployeeByID,
      deleteEmployeeID
} = require('../controllers/employee');
const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.get('/employees/company/:id', getEmployeesByCompany);
router.post('/employees', createNewEmployee);
router.put('/employees/:id', updateEmployeeByID);
router.delete('/employees/:id', deleteEmployeeID);

module.exports = router;