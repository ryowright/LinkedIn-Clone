// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../database');
// const User = require('./User');
// const Comment = require('./Comment');
// const LikedPosts = require('./LikedPosts');

// const Post = sequelize.define('Posts', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   postText: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
// }, {
//   timestamps: true
// })

// Post.belongsTo(User);
// Post.hasMany(Comment);
// Post.belongsToMany(User, { through: LikedPosts });

// module.exports = Post;