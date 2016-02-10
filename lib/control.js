'use strict';

var hueAPI = require('node-hue-api').HueApi;

class Control {
  constructor(io, config) {
    this.io = io;
    this.config = config;
    this.hue = new hueAPI(this.config.hueBridgeIP, this.config.hueBridgeUserName);

    var self = this;
    this.io.on('connection', function(socket){
      console.info('Connected');
      socket.on('message', function(data){
        console.log(data);
      });

      socket.on('room', function(roomID){
        self.toggleMainLights(roomID);
      });

      socket.on('light', function(data){
        switch(data.function) {
          case 'power':
            break;
          case 'colour':
            break;
          case 'colourTemp':
            break;
          case 'dim':
            break;
        }
      });
    });
  }

  /**
   * Toggle all lights of type main in a room
   * @param roomID
   */
  toggleMainLights(roomID) {
    var roomIndex = this.getRoomIndex(roomID);
    var lights = this.getLightsByType(roomIndex, 'main');

    console.info({function: 'toggleMainLights', roomID, roomIndex, lights});
    for(var i = 0; i < lights.length; i++) {
      this.toggleLight(roomID, roomIndex, lights[i]);
    }
  }

  /**
   * Toggle a light on/off
   * @param roomID
   * @param roomIndex
   * @param lightIndex
   */
  toggleLight(roomID, roomIndex, lightIndex) {
    var lightID = this.getLightID(roomIndex, lightIndex);
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    //todo: toggle light by ID
    console.info({function: 'toggleLight', roomID, roomIndex, lightIndex, lightID, hueID, state: true});
    this.io.sockets.emit('light', {roomID, lightID, hueID, state: true});
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

  /**
   * Return light ID for a given room and light index
   * @param roomIndex
   * @param lightIndex
   * @returns id
   */
  getLightID(roomIndex, lightIndex) {
    return this.config.rooms[roomIndex].lights[lightIndex].id;
  }

  /**
   * Return hue ID for a given room and light index
   * @param roomIndex
   * @param lightIndex
   * @returns hueID
   */
  getLightHueID(roomIndex, lightIndex) {
    return this.config.rooms[roomIndex].lights[lightIndex].hueID;
  }
}

module.exports = Control;