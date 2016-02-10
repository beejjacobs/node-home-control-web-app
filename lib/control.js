'use strict';

var config = require('../config.json');
var hue = require('node-hue-api');

class Control {
  constructor(io) {
    this.io = io;

    this.io.on('connection', function(socket){
      console.log('Connected');
      socket.on('message', function(data){
        console.log(data);
      });

      socket.on('room', function(data){
        console.log('room: ' + data);
      });
    });

    this.config = config;
    console.log(this.config.rooms);
  }
}

module.exports = Control;