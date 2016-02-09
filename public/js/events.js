/**
 * Events and other javascript for control
 */
'use strict';

var floorPlan = {
  svg: null,
  rooms: []
};
var socket = io();

function onFloorPlanLoad(svgObject) {
  floorPlan.svg = svgObject.contentDocument;
  floorPlan.rooms = floorPlan.svg.querySelectorAll("[id^='room']");
  for(let i = 0; i < floorPlan.rooms.length; i++) {
    floorPlan.rooms[i].addEventListener('click', function() {
      roomClick(floorPlan.rooms[i]);
    });
    floorPlan.rooms[i].addEventListener('dblclick', function() {
      roomDoubleClick(floorPlan.rooms[i]);
    });
  }
}

function onDOMLoad() {
  var svgObject = document.getElementById('floor-plan');
  svgObject.addEventListener('load', function() {
    onFloorPlanLoad(svgObject);
  });
}

function roomClick(room) {
  var roomName = room.id.slice(5);
  console.log('room: ' + roomName);
  room.style.fill = 'yellow';
}

function roomDoubleClick(room) {
  var roomName = room.id.slice(5);
  console.log('room: ' + roomName);
  room.style.fill = 'blue';
  socket.emit('room', roomName);
}

document.addEventListener('DOMContentLoaded', onDOMLoad);