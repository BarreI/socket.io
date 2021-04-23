const express = require('express');
var app = express();
const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const router = express.Router();

app.get('/',function(res,req){
  res.sendFile(__dirname + '/home.html');
});

module.exports = router