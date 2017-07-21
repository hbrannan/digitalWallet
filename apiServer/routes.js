const controller = require ('./controller.js');

module.exports = function (app, express) {
  app.get('/', (req, res) => res.send('hello world'));

  app.post('/users/signup', (req, res) => res.send('Leave as TODO'));
  app.post('/users/signin', (req, res) => res.send('Leave as TODO'));

  //get a sepcific users' welcome info (firstName, recentCard, recentPurchase)
  app.get('/users', controller.getWelcomeInfo);

  //get all of a users cards
  app.get('/cards', controller.getAllCards);

  //add a new card to a users' wallet
    //requires interim step of validating card with external (bank) API
  app.post('/cards', controller.addNewCard);

  //update a specific users' card
  app.put('/cards', controller.updateCard);

  //del a specific users' card
  app.delete('/cards', controller.deleteCard);

};
