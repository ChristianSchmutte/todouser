const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:x3SQL@localhost:5432/todouser');


(async function bootstrap () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

})();

module.exports = sequelize;