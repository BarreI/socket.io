const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const router = express.Router();

router.get('/',function(res,req){
  res.sendFile(__dirname + '/routes/chat.html');
});

module.exports = router;