const express = require("express");
const router = express.Router();
const {
  createCompany,
  getCompanyById,
  getAllCompanies,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");

router.post("/create", createCompany);
router.get("/search/:id", getCompanyById);
router.get("/search", getAllCompanies);
router.put("/update/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);

module.exports = { companyRouter: router };