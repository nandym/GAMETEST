var express = require("express");
var app = express();
var serv = require("http").Server(app);
//requires the socket used for communication client<->server (Goes both ways)
var io = require("socket.io")(serv,{});

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('client/index.html');
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
console.log("Gives me the information that the server has started.")
/*

*/

var socket_Players = {};


/*
hehehe
>:(
:P
indeed
Success!
*/

io.sockets.on('connection', function(socket){
//nice stuff like stats eh
  socket.id =Math.floor(Math.random()*10000);
  socket.x = 0;
  socket.y = 0;
  socket_Players[socket.id] = socket;

  //Tells me if theres a connnection with a client
    console.log('socket connection');
  //recieves something
    socket.on('cliserv',function(data){
        console.log(data.response);
    });
    //sends something
    socket.emit("serverMsg",{
      msg:"Hello"

    });
});

setInterval(function(){
var pack = [];
  for(var i  in socket_Players){
      console.log(socket_Players[i].id,socket_Players[i].x,socket_Players[i].y);
      var socket = socket_Players[i];
      socket.y++;
      socket.x++;
      pack.push({
        x:socket.x,
        y:socket.y
      })

  }
  for(var i in socket_Players){
  var socket = socket_Players[i];
  socket.emit("nPos",pack);
}
},1000/25);

io.sockets.on("disconnection",function(disc){
  disc.on('cliserv',function(data){
      console.log(data.response,"Has disconnected");
  });

})
