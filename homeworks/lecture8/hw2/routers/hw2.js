const express = require('express');
const router = express.Router();
const userController = require('../controller');

// /api/users
router.get('/:hw2', userController.getAllUsers);


module.exports = router;