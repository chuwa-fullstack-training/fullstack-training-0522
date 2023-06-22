const { Company } = require("../models/companySchema");
const mongoose = require("../database/connect");

const createCompany = async (req, res) => {
  const company = new Company({
    name: req.body.name,
    description: req.body.description,
    headquarters: req.body.headquarters,
    industry: req.body.industry,
    employees: req.body.employees ?? [],
  });

  return company
    .save()
    .then((savedData) => {
      console.log("Created company successfully!");
      res.status(200).json(savedData);
    })
    .catch((err) => console.log(err));
};

const getCompanyById = (req, res) => {
  const id = req.params.id;
  Company.findById(id)
    .then((company) => res.status(200).json(company))
    .catch((err) => console.log(err));
};

const getAllCompanies = (req, res) => {
  Company.find()
    .then((companies) => res.status(200).json(companies))
    .catch((err) => console.log(err));
};

const updateCompany = async (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((companies) =>
    res
      .status(200)
      .json(companies)
      .catch((err) => console.log(err))
  );
};

const deleteCompany = (req, res) => {
  const id = req.params.id;
  Company.findByIdAndDelete(id)
    .then((deletedCompany) => res.status(200).json(deletedCompany))
    .catch((err) => console.log(err));
};

module.exports = {
  createCompany,
  getCompanyById,
  getAllCompanies,
  updateCompany,
  deleteCompany,
};
