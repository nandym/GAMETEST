var express = require("express");
var app = express();
var serv = require("http").Server(app);
//requires the socket used for communication client<->server (Goes both ways)
var io = require("socket.io")(serv,{});


/*
app.get("/",function(req, res){
res.sendFile(__dirname+"/client/img/smiley-face.jpg");
});
app.use("/client/",express.static(__dirname+"/client"));


*/

console.log("Gives me the information that the server has started.")
serv.listen(2000);
io.sockets.on("connection",function(socket) {
  console.log("Tells me a client connected.")
})
