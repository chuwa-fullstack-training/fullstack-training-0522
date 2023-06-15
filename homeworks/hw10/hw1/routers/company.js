const express = require('express');
const {
    getAllCompany,
    getOneCompany,
    deleteOneCompany
} = require('../controllers/company');
const router = express.Router();

router.get('/company', getAllCompany);
router.get('/company/:id', getOneCompany);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser);
router.delete('/company/:id', deleteOneCompany);

module.exports = router;