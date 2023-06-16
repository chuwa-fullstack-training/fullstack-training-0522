const express = require('express');
const {
      createNewCompany,
      getCompanyById,
      updateCompanyByID,
      getAllCompanies,
      deleteCompanyByID,
} = require('../controllers/company');
const router = express.Router();

router.get('/companies', getAllCompanies);
router.get('/companies/:id', getCompanyById);
router.post('/companies', createNewCompany);
router.put('/companies/:id', updateCompanyByID);
router.delete('/companies/:id', deleteCompanyByID);

module.exports = router;