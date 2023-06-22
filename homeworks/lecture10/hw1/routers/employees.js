const express = require('express');
const {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById,
  } = require('../controllers/employees');
const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployeeById);
router.delete('/employees/:id', deleteEmployeeById);

module.exports = router;