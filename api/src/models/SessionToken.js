const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const SessionToken = sequelize.define('SessionToken', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sessionToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

SessionToken.belongsTo(User);

module.exports = SessionToken;