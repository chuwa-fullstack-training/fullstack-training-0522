const express = require('express');
const router = express.Router();
const userController = require('../controller');

// /api/users
router.get('/:time', userController.getTime);


module.exports = router;