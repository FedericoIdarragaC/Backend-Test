const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team')

router.post('/',teamController.playerByTeam);

module.exports = router