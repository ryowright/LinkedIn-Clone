const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Post = require('./Comment');

const LikedPosts = sequelize.define('LikedPosts', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
    }
  },
});

module.exports = LikedPosts;