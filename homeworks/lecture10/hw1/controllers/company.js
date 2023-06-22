const Company = require('../models/company');
const Employee = require('../models/employee');

// Create a new company
const createNewCompany = async (req, res) => {
    try {
    const company = await Company.create(req.body);
    res.json(company);
    } catch (err) {
    console.error('Error creating company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
};

  // Get a company by id
  const getCompanyById = async (req, res) => {
    try {
      const company = await Company.findById(req.params.companyId).populate('employees');
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.json(company);
    } catch (err) {
      console.error('Error getting company:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Update a company by id
  const updateCompanyByID = async (req, res) => {
    try {
      const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true });
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.json(company);
    } catch (err) {
      console.error('Error updating company:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Delete a company by id
  const deleteCompanyByID = async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete(req.params.companyId);
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.sendStatus(204);
    } catch (err) {
      console.error('Error deleting company:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Get all companies
  const getAllCompanies = async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (err) {
      console.error('Error getting companies:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    createNewCompany,
    getCompanyById,
    updateCompanyByID,
    getAllCompanies,
    deleteCompanyByID,
}