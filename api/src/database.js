const {Sequelize} = require('sequelize');
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

const sequelize = new Sequelize(DB_CONNECTION_URL, {
  dialect: 'postgres',
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;