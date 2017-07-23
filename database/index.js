const Sequelize = require('sequelize');
const DB_NAME = process.env.DB_NAME || 'wallet_db';
const DB_STORAGE = process.env.DB_STORAGE || './database.sqlite';
const DB_USER = process.env.DB_USER || 'usr';
const DB_PWD = process.env.DB_PWD || 'pwd';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
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
  cardNumber: {
    type: Sequelize.STRING
  },
  expirationDate: {
    type: Sequelize.STRING
  },
  csc: {
    type: Sequelize.STRING
  },
  isActive: {
    type: Sequelize.BOOLEAN
  },
  lastPurchaseMade: {
    type: Sequelize.INTEGER
  }
});

Card.belongsTo(User);

//TODO: Purchase could expand to contain additional useful fields, e.g., date, store, isCompleted,
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
// sequelize.drop();


module.exports = {
  User: User,
  Card: Card,
  Purchase: Purchase,
  sequelize: sequelize
};

