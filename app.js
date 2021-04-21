var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 8000;

app.get('/' , function(req, res){
  res.sendFile(__dirname + '/main.html')
});

io.on('connection', function(socket){
  socket.on('message',function(msg) {
    console.log("message:" + msg);
  })
})

http.listen(PORT, function(){
  console.log('server listening. Port:' + PORT);
});

//git にあげれてないよ
