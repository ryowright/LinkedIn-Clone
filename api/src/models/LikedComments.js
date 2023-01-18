const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Comment = require('./Comment');

const LikedComments = sequelize.define('LikedComments', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  commentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Comment,
      key: 'id',
    }
  },
});

module.exports = LikedComments;