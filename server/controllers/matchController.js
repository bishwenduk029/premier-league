const mongoose = require('mongoose');
require('../models/matches');

const Matches = mongoose.model('matches');

const MatchController = {
  getMatchList: async (req, res) => {
    let lastMatchDisplayed = req.params.lastMatchDisplayed || 0;
    try {
      const response = await Matches.find({
        id: {
          $gt: lastMatchDisplayed,
        },
      }).limit(5);
      lastMatchDisplayed = (response[response.length - 1]).id;
      res.send({
        matches: response,
        lastMatchDisplayed,
      });
    } catch (e) {
      console.log(e);
    } finally {
      res.send({ error: 'could not receive' });
    }
  },
};

module.exports = MatchController;
