/* Nodejs imports */
var express = require('express');
var path = require('path');

/* Express and Socket.io */
var app = require('express')(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

/* Set the directory where static content lives (aka root directory) */
app.use(express.static(path.join(__dirname, config.root)));

/* Start the server */
server.listen(config.port);

/* Log the port node is running on */
console.log('Listening on port ' + config.port);

/* Setup socket.io */
io.set('log level', 1);

/* Transmit static information about system on websocket connect */
io.sockets.on('connection', function (socket) {
	socket.emit('hello', {'message':'hi'});
});
