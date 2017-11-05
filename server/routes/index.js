const express = require('express');

const router = express.Router();
const MatchController = require('../controllers/matchController');

router.get('/matches/:lastMatchDisplayed', MatchController.getMatchList);
router.get('/matches', MatchController.getMatchList);
router.get('/pages', MatchController.getTotalPageCount);

module.exports = router;
