const express = require("express");
const {
  createNewEmployee,
  getEmployeeById,
  getEmployeesByCompany,
  getAllEmployees,
  updateEmployeeById,
  deleteEmployeeId,
} = require("../controller/employees");
const router = express.Router();

router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployeeById);
router.get("/employees/company/:id", getEmployeesByCompany);
router.post("/employees", createNewEmployee);
router.put("/employees/:id", updateEmployeeById);
router.delete("/employees/:id", deleteEmployeeId);

module.exports = router;
