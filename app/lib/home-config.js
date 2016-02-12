'use strict';

/**
 * Abstraction class around the config object
 */
class HomeConfig {
  /**
   * @param {Object} config
   * @param {string} config.houseName
   * @param {string} config.hueBridgeIP
   * @param {string} config.hueBridgeUserName
   * @param {Object[]} config.floors
   * @param {Object[]} config.rooms
   */
  constructor(config) {
    /**
     * config.json object
     * @type {Object}
     */
    this.config = config;
  }

  /**
   * Get the index for a room object from its ID
   * @param {string} id
   * @returns {int} roomIndex
   */
  getRoomIndex(id) {
    for(var i = 0; i < this.config.rooms.length; i++) {
      if(this.getRoomID(i) == id) {
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
   * @returns {int[]} roomIndex
   */
  getRoomsOnFloor(floorID) {
    var rooms = [];
    for(var i = 0; i < this.getNumberOfRooms(); i++) {
      if(this.config.rooms[i].floor == floorID) {
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
    var count = 0;
    for(var i = 0; i < this.getNumberOfRooms(); i++) {
      count += this.getNumberOfLightsByRoom(i);
    }
    return count;
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
    return this.config.rooms[roomIndex].lights.length;
  }
}

module.exports = HomeConfig;