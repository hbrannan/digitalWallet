const Promise = require('bluebird');
const db = require ('../database/index');

let currentUser;

module.exports = {

  //On App load, retreive user information given param: userId (INT)
  //--> user_name (STR), selected_card_id (INT), last_payment (INT), currency (STR)
  getWelcomeInfo: function (req, res) {
  // FOR  D E V
  //   db.User.create({
  //   firstName: 'steve',
  //   firstName: 'stever',
  //   lastCard: null
  // })
    const userId = Number(req.query.userId);
    return db.User.findOne({
      where: {
        id : userId
      }
    })
    .then(user => {
      currentUser = user;
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

  //On App load, given param: userId (INT)
  //--> Array of Card Objects {card_name, lastFour, lastPurchaseAmount, currency}
  getAllCards: function (req, res) {
    res.send('called get all');
  },

  //On params: userId (INT), cardInfo (OBJ), and variant (STR)
  //--> success: Add Card to User payment methods. Update User lastCard if !exists.
  //--> error (display message)
  addNewCard: function (req, res) {
    console.log('posted to add NewCard', req.body)
    if (!req.body || !(req.body.formData && req.body.userId)) {
      res.status(400).send({msg: 'Post requires valid form data & userId.'})
    } else {
      formData = req.body.formData;

      db.User.findOne({
        where: {
          id: req.body.userId
        }
      }).then (currentUser => {
          currentUser.createCard({
            cardName: `${formData.cardType} ${formData.cardNumber.slice(-4)}`,
            cardNumber: formData.cardNumber,
            expirationDate: formData.expiration,
            csc: formData.csc,
            isActive: 1,
            lastPurchase: null
          })
        })
        .then(card => {
          card.setUser(userId);
          console.log(card.dataValues);
          return card;
        })
        .then(() => res.status(201).send({msg: 'Card created.'}))
        .catch(err => {
          console.log('c a r d   c r e a t e   e r r ', err)
          res.status(500).send({msg: err})
        })

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
