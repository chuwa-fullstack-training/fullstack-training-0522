const Company = require("../models/company");
const Employee = require("../models/employee");

const createNewCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId).populate(
      "employees"
    );
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCompanyById = async (req, res) => {
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
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.companyId);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createNewCompany,
  getCompanyById,
  updateCompanyById,
  getAllCompanies,
  deleteCompanyById,
};
