const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class User extends Model {}
User.init({
  username:{
     type: DataTypes.STRING,
     allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {sequelize, modelName: 'user'});

module.exports = User;