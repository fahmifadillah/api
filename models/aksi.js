// models/aksi.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aksi = sequelize.define('Aksi', {
  aksi_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
}

);

module.exports = Aksi;
