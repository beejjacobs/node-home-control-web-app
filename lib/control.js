'use strict';

var hue = require('node-hue-api');

class Control {
  constructor(io, config) {
    this.io = io;
    this.config = config;

    this.io.on('connection', function(socket){
      console.log('Connected');
      socket.on('message', function(data){
        console.log(data);
      });

      socket.on('room', function(data){
        console.log('room: ' + data);
      });
    });
  }

  /**
   * Get the index for a room object from its ID
   * @param id
   * @returns {number}
   */
  getRoomIndex(id) {
    for(var i = 0; i < this.config.rooms.length; i++) {
      if(this.config.rooms[i].id == id) {
        break;
      }
    }
    return i;
  }

  /**
   * Get an array of room indexes for the given floor
   * @param floor
   * @returns {Array}
   */
  getRoomsOnFloor(floor) {
    var rooms = [];
    for(var i = 0; i < this.config.rooms.length; i++) {
      if(this.config.rooms[i].floor == floor) {
        rooms.push(i);
      }
    }
    return rooms;
  }

  /**
   * Get an array of light indexes of a particular type for the given room
   * @param roomIndex
   * @param type
   * @returns {Array}
   */
  getLightsByType(roomIndex, type) {
    var lights = [];
    var roomLights = this.config.rooms[roomIndex].lights;
    for(var i = 0; i < roomLights.length; i++) {
      if(roomLights[i].type == type) {
        lights.push(i);
      }
    }
    return lights;
  }
}

module.exports = Control;