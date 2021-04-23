var express = require('express');
var helmet = require('helmet');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 8000;

const Users = require('./models/Users');
Users.sync();

// const homeRouter = require('./routes/home');
// const chatRouter = require('./routes/chat');

app.use(helmet());
// app.use('/', homeRouter);
// app.use('/chat', chatRouter);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.post('/', function(res,req){
  
})

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });
})

http.listen(PORT, function () {
  console.log('server listening. Port:' + PORT);
});
