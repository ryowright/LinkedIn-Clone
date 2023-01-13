const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // connectionDegree: {

  // },
  postText: {

  },
  comments: {

  },
  numReactions: {

  },
  timestamp: {

  },
})

Post.belongsTo(User);

module.exports = Post;