const company = require('../models/company');

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a company by id
const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new company
const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    await company.save();
    res.status(201).json({ message: 'Company created' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a company by id
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    await company.save();
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a company by id
const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Company deleted' });
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
