const mongoose = require('mongoose');
require('../models/matches');

const Matches = mongoose.model('matches');

const MatchController = {
  getMatchList: async (req, res) => {
    let lastMatchDisplayed = req.params.lastMatchDisplayed || 0;
    const totalMatches = await Matches.find().count();
    if (lastMatchDisplayed < totalMatches) {
      try {
        const response = await Matches.find({
          id: {
            $gt: lastMatchDisplayed,
          },
        }).limit(20);
        lastMatchDisplayed = (response[response.length - 1]).id;
        res.send({
          matches: response,
          lastMatchDisplayed,
          error: false,
        });
      } catch (e) {
        console.log(e);
      } finally {
        res.send({ error: true });
      }
    } else {
      res.send({
        matches: [],
        error: false,
        lastMatchDisplayed: null,
      });
    }
  },
  getTotalPageCount: async (req, res) => {
    try {
      const matchCount = await Matches.find().count();
      res.send({ page_count: Math.ceil(matchCount / 10) });
    } catch (e) {
      console.log(e);
    } finally {
      res.send({ page_count: 0 });
    }
  },
};

module.exports = MatchController;
