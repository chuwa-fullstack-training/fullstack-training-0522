const express = require('express');
const {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompanyById,
    deleteCompanyById,
    getAllEmployeesOfCompany,
  } = require('../controllers/companies');
const router = express.Router();

router.get('/companies', getAllCompanies);
router.get('/companies/:id', getCompanyById);
router.post('/companies', createCompany);
router.put('/companies/:id', updateCompanyById);
router.delete('/companies/:id', deleteCompanyById);
router.get('/companies/:id/employees', getAllEmployeesOfCompany);

module.exports = router;
