const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Post = require('./Post');
const Comment = require('./Comment');
const UserConnections = require('./UserConnections');
const LikedComments = require('./LikedComments');
const LikedPosts = require('./LikedPosts');
const SessionToken = require('./SessionToken');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  headline: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false
})

User.belongsToMany(User, { through: UserConnections, as: "to", foreignKey: "id" });
User.belongsToMany(User, { through: UserConnections, as: "from", foreignKey: "id" });
User.belongsToMany(Comment, { through: LikedComments });
User.belongsToMany(Post, { through: LikedPosts });
User.hasMany(Post);
User.hasMany(Comment);
User.hasMany(SessionToken);

module.exports = User;