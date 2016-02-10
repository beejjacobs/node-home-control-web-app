'use strict';

var hueAPI = require('node-hue-api').HueApi;

class Control {
  constructor(io, config) {
    this.io = io;
    this.config = config;
    this.hue = new hueAPI(
      this.config.hueBridgeIP,
      this.config.hueBridgeUserName
    );

    var self = this;
    this.io.on('connection', function(socket){
      console.info('Connected');
      socket.on('message', function(data){
        console.log(data);
      });

      socket.on('room', function(roomID){
        self.toggleMainLights(roomID);
      });

      /**
       * Light control event
       * @param data
       * @param data.command
       * @param data.roomID
       * @param data.lightID
       * @param data.colour
       * @param data.colourTemp
       */
      socket.on('light', function(data){
        var roomIndex = self.getRoomIndex(data.roomID);
        var lightIndex = self.getLightIndex(roomIndex, data.lightID);
        switch(data.command) {
          case 'power':
            self.lightTogglePower(roomIndex, lightIndex);
            break;
          case 'colour':
            self.lightSetColour(roomIndex, lightIndex, data.colour);
            break;
          case 'colourTemp':
            self.lightSetColourTemp(roomIndex, lightIndex, data.colourTemp);
            break;
          case 'brightness':
            self.lightSetBrightness(roomIndex, lightIndex, data.brightness);
            break;
        }
      });
    });
  }

  lightTogglePower(roomIndex, lightIndex) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    //todo: get light state
    this.setPower(hueID, true);
    this.emit(roomIndex, lightIndex, 'power', true);
  }

  lightSetColour(roomIndex, lightIndex, colour) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setColour(hueID, colour);
    this.emit(roomIndex, lightIndex, 'colour', colour);
  }

  lightSetColourTemp(roomIndex, lightIndex, colourTemp) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setColour(hueID, colourTemp);
    this.emit(roomIndex, lightIndex, 'colourTemp', colourTemp);
  }

  lightSetBrightness(roomIndex, lightIndex, brightness) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setBrightness(hueID, brightness);
    this.emit(roomIndex, lightIndex, 'brightness', brightness);
  }

  /**
   * Toggle all lights of type main in a room
   * @param roomID
   */
  toggleMainLights(roomID) {
    var roomIndex = this.getRoomIndex(roomID);
    var lights = this.getLightsByType(roomIndex, 'main');

    for(var i = 0; i < lights.length; i++) {
      this.lightTogglePower(roomIndex, lights[i]);
    }
  }

  /**
   * Set a light power state by hueID
   * @param hueID
   * @param state
   */
  setPower(hueID, state) {
    //todo: set light power state
    console.error({error: 'setPower not implemented', hueID, state});
  }

  /**
   * Set light colour by hueID
   * @param hueID
   * @param colour
   */
  setColour(hueID, colour) {
    //todo: set light colour
    console.error({error: 'setColour not implemented', hueID, colour});
  }

  /**
   * Set light brightness by hueID
   * @param hueID
   * @param brightness
   */
  setBrightness(hueID, brightness) {
    //todo: set light brightness
    console.error({error: 'setBrightness not implemented', hueID, brightness});
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
   * Return room ID from room index
   * @param roomIndex
   * @returns {*}
   */
  getRoomID(roomIndex) {
    return this.config.rooms[roomIndex].id;
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
   * Get the index for a light object from its ID and room
   * @param roomIndex
   * @param lightID
   * @returns {number}
   */
  getLightIndex(roomIndex, lightID) {
    var roomLights = this.config.rooms[roomIndex].lights;
    for(var i = 0; i < roomLights.length; i++) {
      if(roomLights[i].id == lightID) {
        break;
      }
    }
    return i;
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

  emit(roomIndex, lightIndex, command, value) {
    var roomID = this.getRoomID(roomIndex);
    var lightID = this.getLightID(roomIndex, lightIndex);
    var hueID = this.getLightHueID(roomIndex, lightIndex);

    console.info({roomID, roomIndex, lightIndex, lightID, hueID, command, value});
    this.io.sockets.emit('light', {roomID, lightID, command, value});
  }
}

module.exports = Control;