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
      this.getHueIP(),
      this.getHueUserName()
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
   * @param {string} data.floorID
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
    var roomIndex = this.getRoomByID(data.roomID);
    var lights = this.getLightsByRoomAndType(roomIndex, 'main');

    for(var i = 0; i < lights.length; i++) {
      this.lightTogglePower(lights[i]);
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
    var lightIndex = this.getLightByID(data.lightID);
    switch(data.command) {
      case 'power':
        this.lightTogglePower(lightIndex);
        break;
      case 'colour':
        this.lightSetColour(lightIndex, data.colour);
        break;
      case 'colourTemp':
        this.lightSetColourTemp(lightIndex, data.colourTemp);
        break;
      case 'brightness':
        this.lightSetBrightness(lightIndex, data.brightness);
        break;
    }
  }

  /**
   * Set all the lights on a floor on or off
   * @param {string} floorID
   * @param {boolean} state
   */
  floorSetPower(floorID, state) {
    var floorIndex = this.getFloorByID(floorID);
    var hueIDs = this.getLightsHueIDsByFloor(floorIndex);

    for(var i = 0; i < hueIDs.length; i++) {
      this.setPower(hueIDs[i], state);
    }
  }

  /**
   * Toggle the power state for a given light
   * @param {int} roomIndex
   * @param {int} lightIndex
   */
  lightTogglePower(lightIndex) {
    var hueID = this.getLightHueID(lightIndex);
    //todo: get light state
    this.setPower(hueID, true);
    this.emit(lightIndex, 'power', true);
  }

  /**
   * Set the colour state of a light
   * @param {int} lightIndex
   * @param {Object} colour
   */
  lightSetColour(lightIndex, colour) {
    var hueID = this.getLightHueID(lightIndex);
    this.setColour(hueID, colour);
    this.emit(lightIndex, 'colour', colour);
  }

  /**
   * Set the colour temperature of a light
   * @param {int} lightIndex
   * @param {int} colourTemp
   */
  lightSetColourTemp(lightIndex, colourTemp) {
    var hueID = this.getLightHueID(lightIndex);
    this.setColour(hueID, colourTemp);
    this.emit(lightIndex, 'colourTemp', colourTemp);
  }

  /**
   * Set the brightness of a light
   * @param {int} lightIndex
   * @param {int} brightness
   */
  lightSetBrightness(lightIndex, brightness) {
    var hueID = this.getLightHueID(lightIndex);
    this.setBrightness(hueID, brightness);
    this.emit(lightIndex, 'brightness', brightness);
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
   * @param {int} lightIndex
   * @param {string} command
   * @param {Object} value
   */
  emit(lightIndex, command, value) {
    var roomID = this.getLightRoomID(lightIndex);
    var roomIndex = this.getRoomByID(roomID);
    var lightID = this.getLightID(lightIndex);
    var hueID = this.getLightHueID(lightIndex);

    console.info({roomID, roomIndex, lightID, lightIndex, hueID, command, value});
    this.io.sockets.emit('light', {roomID, lightID, command, value});
  }
}

module.exports = HomeControl;