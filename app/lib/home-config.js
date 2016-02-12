'use strict';

/**
 * Config object matches config.json file
 * @typedef {object} config
 * @property {string} houseName
 * @property {string} hueBridgeIP
 * @property {string} hueBridgeUserName
 * @property {Object[]} floors
 * @property {string} floors[].id
 * @property {string} floors[].name
 * @property {Object[]} rooms
 * @property {string} rooms[].id
 * @property {string} rooms[].name
 * @property {string} rooms[].floorID
 * @property {Object[]} lights
 * @property {string} lights[].id
 * @property {string} lights[].name
 * @property {string} lights[].roomID
 * @property {int} lights[].hueID
 * @property {string} lights[].type
 * @property {string} lights[].colour
 */

/**
 * Abstraction class around the config object
*/
class HomeConfig {
  /**
   * @param {config} config
   */
  constructor(config) {
    /**
     * @type {config}
     */
    this.config = config;
  }

  /**
   * Get the house name
   * @returns {string}
   */
  getHouseName() {
    return this.config.houseName;
  }

  /**
   * Get the Hue Bridge IP address
   * @returns {string}
   */
  getHueIP() {
    return this.config.hueBridgeIP;
  }

  /**
   * Get the Hue Bridge User Name
   * @returns {string}
   */
  getHueUserName() {
    return this.config.hueBridgeUserName;
  }

  /**
   * Get a floor's ID
   * @param {int} floorIndex
   * @returns {string}
   */
  getFloorID(floorIndex) {
    return this.config.floors[floorIndex].id;
  }

  /**
   * Get a floor's name
   * @param {int} floorIndex
   * @returns {string}
   */
  getFloorName(floorIndex) {
    return this.config.floors[floorIndex].name;
  }

  /**
   * Get a room's ID
   * @param {int} roomIndex
   * @returns {string} roomID
   */
  getRoomID(roomIndex) {
    return this.config.rooms[roomIndex].id;
  }

  /**
   * Get a room's name
   * @param roomIndex
   * @returns {*}
   */
  getRoomName(roomIndex) {
    return this.config.rooms[roomIndex].name;
  }

  /**
   * Get a room's floorID
   * @param {int} roomIndex
   * @returns {string}
   */
  getRoomFloorID(roomIndex) {
    return this.config.rooms[roomIndex].floorID;
  }

  /**
   * Get a light's ID
   * @param {int} lightIndex
   * @returns {string} lightID
   */
  getLightID(lightIndex) {
    return this.config.lights[lightIndex].id;
  }

  /**
   * Get a light's name
   * @param {int} lightIndex
   * @returns {string}
   */
  getLightName(lightIndex) {
    return this.config.lights[lightIndex].name;
  }

  /**
   * Get a light's roomID
   * @param {int} lightIndex
   * @returns {string}
   */
  getLightRoomID(lightIndex) {
    return this.config.lights[lightIndex].roomID;
  }

  /**
   * Get a light's hueID
   * @param {int} lightIndex
   * @returns {int} hueID
   */
  getLightHueID(lightIndex) {
    return this.config.lights[lightIndex].hueID;
  }

  /**
   * Get a light's type
   * @param {int} lightIndex
   * @returns {string}
   */
  getLightType(lightIndex) {
    return this.config.lights[lightIndex].type;
  }

  /**
   * Get a light's colour
   * @param {int} lightIndex
   * @returns {string}
   */
  getLightColour(lightIndex) {
    return this.config.lights[lightIndex].colour;
  }

  /**
   * Get the index for a room object from its ID
   * @param {string} id
   * @returns {int} roomIndex
   */
  getRoomIndex(id) {
    for(var i = 0; i < this.getNumberOfRooms(); i++) {
      if(this.getRoomID(i) == id) {
        break;
      }
    }
    return i;
  }

  /**
   * Get an array of room indexes for the given floor
   * @param {string} floorID
   * @returns {int[]} roomIndex
   */
  getRoomsOnFloor(floorID) {
    var rooms = [];
    for(var i = 0; i < this.getNumberOfRooms(); i++) {
      if(this.getRoomFloorID(i) == floorID) {
        rooms.push(i);
      }
    }
    return rooms;
  }

  /**
   * Get an array of light indexes of a particular type for the given room
   * @param {int} roomIndex
   * @param {string} type
   * @returns {int[]} lightIndex
   */
  getLightsByType(roomIndex, type) {
    var lights = [];
    var roomLights = this.config.rooms[roomIndex].lights;
    for(var i = 0; i < this.getNumberOfLightsByRoom(roomIndex); i++) {
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
   * Get the total number of floors
   * @returns {int}
   */
  getNumberOfFloors() {
    return this.config.floors.length;
  }

  /**
   * Get the total number of rooms
   * @returns {int}
   */
  getNumberOfRooms() {
    return this.config.rooms.length;
  }

  /**
   * Get the total number of lights
   * @returns {int}
   */
  getNumberOfLights() {
    return this.config.lights.length;
  }

  /**
   * Get the number of rooms on the given floor
   * @param {int} floorID
   * @return {int}
   */
  getNumberOfRoomsByFloor(floorID) {
    var count = 0;
    for(var i = 0; i < this.getNumberOfRooms(); i++) {
      if(this.config.rooms[i].floor == floorID) {
        count++;
      }
    }
    return count;
  }

  /**
   * Get the number of lights in a room
   * @param roomIndex
   * @returns {Number}
   */
  getNumberOfLightsByRoom(roomIndex) {
    //todo
  }
}

module.exports = HomeConfig;