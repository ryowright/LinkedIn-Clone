const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Post = require('./Post');
const UserConnections = require('./UserConnections');

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
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numProfileViews: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numConnections: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false
})

User.belongsToMany(User, { through: UserConnections });
User.hasMany(Post, {
  foreignKey: 'id'
});

module.exports = User;