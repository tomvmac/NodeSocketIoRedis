var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var subscriber = require("redis").createClient();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// socket io
io.on('connection', function (socket) {
    console.log('a user is now   connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chatevent', function (msg) {
        console.log('message: ' + msg);
        io.emit('chatevent', msg);
    });

    socket.on('announcements', function (msg) {
        console.log('message: ' + msg);
        io.emit('announcements', msg);
    });


});

// redis
subscriber.on("message", function(channel, message) {
    console.log("Message from announcements channel " + message + " was read.");

    // emit using socket io
    io.emit('announcements', message);

  });
  
subscriber.subscribe("announcements");


http.listen(3000, function () {
    console.log('listening on *:3000');
});