'use strict'
const loader = require('./loader.js')
const Sequelize = loader.Sequelize;

const Users = loader.database.define(
  'users',
  {
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
      allownull: false
    },
    pass: {
      type: Sequelize.STRING,
      allownull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Users;