'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost/chat');

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
