const Sequelize = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize('sql12623387', 'sql12623387', 'dTlBZL8F4e', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Role = require('./role')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Aksi = require('./aksi')(sequelize, Sequelize);
db.Artikel = require('./artikel')(sequelize, Sequelize);

module.exports = db;
