const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const SessionToken = sequelize.define('SessionTokens', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  sessionToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = SessionToken;