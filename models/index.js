
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://chrisschmutte@localhost:5432/todouser`);


(async function bootstrap () {
  try {

    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;