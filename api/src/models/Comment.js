const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Post = require('./Post');
const LikedComments = require('./LikedComments');

const Comment = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  commentText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true
})

Comment.belongsTo(Post);
Comment.belongsTo(User);
Comment.belongsToMany(User, { through: LikedComments });

module.exports = Comment;