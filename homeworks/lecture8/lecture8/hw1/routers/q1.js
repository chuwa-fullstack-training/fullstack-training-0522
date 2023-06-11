const express = require('express');
const router = express.Router();
const userController = require('../controller');

// /api/users
router.get('/hw1/:folder/:extension', userController.getFiles);


module.exports = router;