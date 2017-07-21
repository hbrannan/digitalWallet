const Promise = require('bluebird');
module.exports = {
  //params: user_id (int)
  // -> user_name (STR), selected_card_id (INT), last_payment (INT), currency (STR)
  getWelcomeInfo: function (req, res) {
    res.send('called getWelcomeInfo');
  },
  //params: user_id (int)
  // -> Array of Objects {card_name, lastFour, lastPurchasAmount, currency}
  getAllCards: function (req, res) {
    res.send('called get all');
  },
  //params: user_id (int, card info)
  // -> success (add card to methods) / error (display message)
  addNewCard: function (req, res) {
    res.send('called add');
  },
  //params: user_id (int), card info
  // -> success (update card on methods, display msg) / error (display message)
  updateCard: function (req, res) {
    res.send('called up');
  },
  //params: card_id (int)
  // -> success (remove card from methods) / error (display message)
  deleteCard: function (req, res) {
    res.send('called del');
  },
};
