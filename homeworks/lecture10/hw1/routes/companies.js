const express = require("express");
const {
  createNewCompany,
  getCompanyById,
  updateCompanyById,
  getAllCompanies,
  deleteCompanyById,
} = require("../controller/companies");
const router = express.Router();

router.get("/companies", getAllCompanies);
router.get("/companies/:id", getCompanyById);
router.post("/companies", createNewCompany);
router.put("/companies/:id", updateCompanyById);
router.delete("/companies/:id", deleteCompanyById);

module.exports = router;
