const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployeeById,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getCompanyEmployees,
} = require("../controllers/employee");

router.post("/create", createEmployee);
router.get("/search/:id", getEmployeeById);
router.get("/search", getAllEmployees);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);
router.get("/search-by-company/:id", getCompanyEmployees);

module.exports = { employeeRouter: router };
