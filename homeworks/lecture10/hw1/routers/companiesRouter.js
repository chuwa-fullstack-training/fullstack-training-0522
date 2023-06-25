const express = require("express");

const {
    createCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany,
    getEmployeesOfCompany
  } = require('../controllers/company');
  const companyRouter = express.Router();

  // CREATE A COMPANY
  companyRouter.post('/companies', createCompany);
  // GET ALL COMPANIES
  companyRouter.get('/companies',getAllCompanies);
  // GET ONE COMPANY
  companyRouter.get('/companies/:id',getOneCompany);
  // UPDATE COMPANY
  companyRouter.put('/companies/:id', updateCompany);
  // DELETE COMPANY
  companyRouter.delete('/companies/:id', deleteCompany);
  // GET ALL EMPLOYEES OF A COMPANY
  companyRouter.get('/companies/:id/employees', getEmployeesOfCompany);

  module.exports = companyRouter;