const express = require('express');

const router = express.Router();
const MatchController = require('../controllers/matchController');

router.get('/matches/:lastMatchDisplayed', MatchController.getMatchList);

module.exports = router;
