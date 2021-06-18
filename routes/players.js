const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players')

router.get('/',playersController.playerBySearch);

module.exports = router