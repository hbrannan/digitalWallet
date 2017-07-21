const Promise = require('bluebird');
module.exports = {
  //params: user_id (int)
  getWelcomeInfo: function (req, res) {
    res.send('called getWelcomeInfo');
  },
  //params: user_id (int)
  getAllCards: function (req, res) {
    res.send('called get all');
  },
  //params: user_id (int, card info)
  addNewCard: function (req, res) {
    res.send('called add');
  },
  //params: user_id (int), card info
  updateCard: function (req, res) {
    res.send('called up');
  },
  //params: card_id (int)
  deleteCard: function (req, res) {
    res.send('called del');
  },
};
