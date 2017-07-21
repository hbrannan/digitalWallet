console.log('loaded in db index')
const Sequelize = require('sequelize');
var DB_NAME = 'wallet_db';
var DB_STORAGE = './database.sqlite';

const sequelize = new Sequelize(DB_NAME, 'usr', 'pwd', {
  dialect: 'sqlite',
  host: 'localhost',
  storage: DB_STORAGE
});

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  lastCard: {
    type: Sequelize.INTEGER
  }
});

const Card = sequelize.define('cards', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cardName: {
    type: Sequelize.STRING
  },
  lastFour: {
    type: Sequelize.STRING
  },
  cardNumber: {
    type: Sequelize.STRING
  },
  dateValidThrough: {
    type: Sequelize.STRING
  },
  csc: {
    type: Sequelize.STRING
  },
  isActive: {
    type: Sequelize.BOOLEAN
  },
  lastPurchase: {
    type: Sequelize.INTEGER
  }
});

Card.belongsTo(User);

//TODO: Purchase would likely contain additional fields, e.g., date, store, isCompleted,
const Purchase = sequelize.define('purchases', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  amount: {
    type: Sequelize.STRING
  }
});

Purchase.belongsTo(Card);

sequelize.sync();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  User: User,
  Card: Card,
  Purchase: Purchase,
  sequelize: sequelize
};

