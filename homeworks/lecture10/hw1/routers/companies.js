const express = require('express');
const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company');
const companyRouter = express.Router();

companyRouter.get('/companies', getAllCompanies);
companyRouter.get('/companies/:id', getOneCompany);
companyRouter.post('/companies', createCompany);
companyRouter.put('/companies/:id', updateCompany);
companyRouter.delete('/companies/:id', deleteCompany);

module.exports = companyRouter;
