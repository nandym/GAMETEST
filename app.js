var express = require("express");
var app = express();
var serv = require("http").Server(app);
//requires the socket used for communication client<->server (Goes both ways)
var io = require("socket.io")(serv,{});



app.get("/",function(req, res){
res.sendFile(__dirname+"/client/index.html");
});
app.use("/client/",express.static(__dirname+"/client"));


console.log("Gives me the information that the server has started.")
serv.listen(2000);
/*

*/

var socket_Players = {};

/*


*/

io.sockets.on('connection', function(socket){
//nice stuff like stats eh
  socket.id =Math.floor(Math.random()*10000);
  socket.x = 0:
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

    })
});

Loop(function(){
  for(var i  in socket_Players){
      console.log(socket_Players[i]);
      var socket = socket_Players[i];
      socket.y++;
      socket.x++;
      socket.emit("nPos",{

      });
  }

}.1000/25);

io.sockets.on("disconnection",function(disc){
  disc.on('cliserv',function(data){
      console.log(data.response,"Has disconnected");
  });

})
