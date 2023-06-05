// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql12623387', 'sql12623387', 'dTlBZL8F4e', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
});

module.exports = sequelize;
