/**
 * Events and other javascript for control
 */
'use strict';

var floorPlan = {
  svg: null,
  rooms: []
};
var socket = io();

function onDOMLoad() {
  var svgObject = document.getElementById('floor-plan');
  svgObject.addEventListener('load', function() {
    onFloorPlanLoad(svgObject);
  });
}
document.addEventListener('DOMContentLoaded', onDOMLoad);

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

function roomClick(room) {
  var roomID = room.id.slice(5);
  console.log('room: ' + roomID);
  room.style.fill = 'yellow';
  socket.emit('room', {roomID});
}

function roomDoubleClick(room) {
  var roomID = room.id.slice(5);
  window.location.href = '/room/' + roomID;
  room.style.fill = 'blue';
}