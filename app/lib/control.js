'use strict';

var hueAPI = require('node-hue-api').HueApi;

class Control {
  /**
   * Control class for controlling devices from received client events.
   * @param {object} io socket.io instance
   * @param {object} config config.json object
   * @param {string} config.houseName
   * @param {string} config.hueBridgeIP
   * @param {string} config.hueBridgeUserName
   * @param {Array} config.floors
   * @param {Array} config.rooms
   */
  constructor(io,  config) {
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

      socket.on('room', function(data){
        self.processRoomEvent(data);
      });

      socket.on('light', function(data){
        self.processLightEvent(data);
      });
    });
  }

  /**
   * Process 'room' event from a client
   * Toggle all lights of type main in the room
   * @param {object} data
   * @param {string} data.roomID
   */
  processRoomEvent(data) {
    //todo: check data.roomID exists
    var roomIndex = this.getRoomIndex(data.roomID);
    var lights = this.getLightsByType(roomIndex, 'main');

    for(var i = 0; i < lights.length; i++) {
      this.lightTogglePower(roomIndex, lights[i]);
    }
  }

  /**
   * Process 'light' event from a client
   * @param {object} data
   * @param {string} data.command
   * @param {string} data.roomID
   * @param {string} data.lightID
   * @param {object} data.colour
   * @param {int} data.colourTemp
   * @param {int} data.brightness
   */
  processLightEvent(data) {
    //todo: check objects exist
    var roomIndex = this.getRoomIndex(data.roomID);
    var lightIndex = this.getLightIndex(roomIndex, data.lightID);
    switch(data.command) {
      case 'power':
        this.lightTogglePower(roomIndex, lightIndex);
        break;
      case 'colour':
        this.lightSetColour(roomIndex, lightIndex, data.colour);
        break;
      case 'colourTemp':
        this.lightSetColourTemp(roomIndex, lightIndex, data.colourTemp);
        break;
      case 'brightness':
        this.lightSetBrightness(roomIndex, lightIndex, data.brightness);
        break;
    }
  }

  /**
   * Toggle the power state for a given light
   * @param {int} roomIndex
   * @param {int} lightIndex
   */
  lightTogglePower(roomIndex, lightIndex) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    //todo: get light state
    this.setPower(hueID, true);
    this.emit(roomIndex, lightIndex, 'power', true);
  }

  /**
   * Set the colour state of a light
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @param {object} colour
   */
  lightSetColour(roomIndex, lightIndex, colour) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setColour(hueID, colour);
    this.emit(roomIndex, lightIndex, 'colour', colour);
  }

  /**
   * Set the colour temperature of a light
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @param {int} colourTemp
   */
  lightSetColourTemp(roomIndex, lightIndex, colourTemp) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setColour(hueID, colourTemp);
    this.emit(roomIndex, lightIndex, 'colourTemp', colourTemp);
  }

  /**
   * Set the brightness of a light
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @param {int} brightness
   */
  lightSetBrightness(roomIndex, lightIndex, brightness) {
    var hueID = this.getLightHueID(roomIndex, lightIndex);
    this.setBrightness(hueID, brightness);
    this.emit(roomIndex, lightIndex, 'brightness', brightness);
  }

  /**
   * Set a light power state by hueID
   * @param {int} hueID
   * @param {boolean} state
   */
  setPower(hueID, state) {
    //todo: set light power state
    console.error({error: 'setPower not implemented', hueID, state});
  }

  /**
   * Set light colour by hueID
   * @param {int} hueID
   * @param {object} colour
   */
  setColour(hueID, colour) {
    //todo: set light colour
    console.error({error: 'setColour not implemented', hueID, colour});
  }

  /**
   * Set light brightness by hueID
   * @param {int} hueID
   * @param {int} brightness
   */
  setBrightness(hueID, brightness) {
    //todo: set light brightness
    console.error({error: 'setBrightness not implemented', hueID, brightness});
  }

  /**
   * Get the index for a room object from its ID
   * @param {string} id
   * @returns {number} roomIndex
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
   * @param {int} roomIndex
   * @returns {string} roomID
   */
  getRoomID(roomIndex) {
    return this.config.rooms[roomIndex].id;
  }

  /**
   * Get an array of room indexes for the given floor
   * @param {int} floor
   * @returns {Array} roomIndex
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
   * @param {int} roomIndex
   * @param {string} type
   * @returns {Array} lightIndex
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
   * @param {int} roomIndex
   * @param {string} lightID
   * @returns {int} lightIndex
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
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @returns {string} lightID
   */
  getLightID(roomIndex, lightIndex) {
    return this.config.rooms[roomIndex].lights[lightIndex].id;
  }

  /**
   * Return hue ID for a given room and light index
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @returns {int} hueID
   */
  getLightHueID(roomIndex, lightIndex) {
    return this.config.rooms[roomIndex].lights[lightIndex].hueID;
  }

  /**
   * Emit a socket event and log the action
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @param {string} command
   * @param {object} value
   */
  emit(roomIndex, lightIndex, command, value) {
    var roomID = this.getRoomID(roomIndex);
    var lightID = this.getLightID(roomIndex, lightIndex);
    var hueID = this.getLightHueID(roomIndex, lightIndex);

    console.info({roomID, roomIndex, lightID, lightIndex, hueID, command, value});
    this.io.sockets.emit('light', {roomID, lightID, command, value});
  }
}

module.exports = Control;