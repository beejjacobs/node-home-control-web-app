'use strict';

var HomeConfig = require('./home-config');
var hueAPI = require('node-hue-api').HueApi;

/**
 * @extends HomeConfig
 */
class HomeControl extends HomeConfig {
  /**
   * HomeControl class for controlling devices from received client events.
   * @param {Object} io socket.io instance
   * @param {Object} config config.json object
   */
  constructor(io,  config) {
    super(config);
    /**
     * Socket.io instance
     * @type {Object}
     */
    this.io = io;
    /**
     * node-hue-api
     * @type {Object}
     */
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

      socket.on('floor', function(data){
        self.processFloorEvent(data);
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
   * Process 'floor' event from a client
   * @param {Object} data
   * @param {int} data.floorID
   */
  processFloorEvent(data) {

  }

  /**
   * Process 'room' event from a client
   * Toggle all lights of type main in the room
   * @param {Object} data
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
   * @param {Object} data
   * @param {string} data.command
   * @param {string} data.roomID
   * @param {string} data.lightID
   * @param {Object} data.colour
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
   * Set all the lights on a floor on or off
   * @param {int} floorID
   * @param {boolean} state
   */
  floorSetPower(floorID, state) {
    var roomIndexes = this.getRoomsOnFloor(data.floorID);
    var hueID = null;
    for(let i = 0; i < rooms.length; i++) {
      for(let j = 0; j < this.getNumberOfLightsByRoom(roomIndexes[i]); j++) {
        hueID = this.getLightHueID(roomIndexes[i],  j);
        this.setPower(hueID, state);
      }
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
   * @param {Object} colour
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
   * @param {Object} colour
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
   * Emit a socket event and log the action
   * @param {int} roomIndex
   * @param {int} lightIndex
   * @param {string} command
   * @param {Object} value
   */
  emit(roomIndex, lightIndex, command, value) {
    var roomID = this.getRoomID(roomIndex);
    var lightID = this.getLightID(roomIndex, lightIndex);
    var hueID = this.getLightHueID(roomIndex, lightIndex);

    console.info({roomID, roomIndex, lightID, lightIndex, hueID, command, value});
    this.io.sockets.emit('light', {roomID, lightID, command, value});
  }
}

module.exports = HomeControl;