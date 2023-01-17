const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const UserConnections = sequelize.define('UserConnections', {
  firstUserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  secondUserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
});

module.exports = UserConnections;