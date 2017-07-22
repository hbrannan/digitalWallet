const Promise = require('bluebird');
const db = require ('../database/index');

module.exports = {
  //params: user_id (int)
  // -> user_name (STR), selected_card_id (INT), last_payment (INT), currency (STR)
  getWelcomeInfo: function (req, res) {
    const userId = Number(req.query.userId);
    return db.User.findOne({
      where: {
        id : userId
      }
    })
    .then(user => {
      let welcomeData;
      if (user) {
        welcomeData = {
          first: user.firstName,
          last: user.lastName,
          lastCard: user.lastCard
        };
      }
      res.send({welcomeData})
    })
    .catch(err => {console.log(err); res.send('getWelcomeFail', err)})

  },
  //params: user_id (int)
  // -> Array of Objects {card_name, lastFour, lastPurchaseAmount, currency}
  getAllCards: function (req, res) {
    res.send('called get all');
  },
  //params: user_id (int, card info)
  // -> success (add card to methods) / error (display message)
  addNewCard: function (req, res) {
    console.log('posted to add NewCard', req.body)
    if (!req.body || !req.body.formData) {
      res.status(400).send({msg: 'Post requires valid form data.'})
    } else {
      formData = req.body.formData;
      db.Card.create({
        cardName: formData.cardType,
        lastFour: formData.cardNumber.slice(-4),
        cardNumber: formData.cardNumber,
        expirationDate: formData.expiration,
        csc: formData.csc,
        isActive: 1,
        lastPurchase: null
      })
        .then(card => {
          console.log(card);
          return card;
        })
        .then(() => res.status(201).send({msg: 'Card created.'}))
        .catch(err => res.status(500).send({msg: err}))

    }
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
