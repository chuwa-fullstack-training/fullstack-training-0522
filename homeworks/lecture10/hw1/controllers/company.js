const Company = require("../models/company");

// create a new company
const createNewCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create company." });
  }
};

// get a company by id
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId).populate(
      "employees"
    );
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get company by id." });
  }
};

// update a company by id
const updateCompanyByID = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(
      req.params.companyId,
      req.body,
      { new: true }
    );
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Falied to update a company by id" });
  }
};

// Delete a company by id
const deleteCompanyByID = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.companyId);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete a company by id." });
  }
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get all companies" });
  }
};

module.exports = {
  createNewCompany,
  getCompanyById,
  updateCompanyByID,
  getAllCompanies,
  deleteCompanyByID,
};
