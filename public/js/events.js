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
      roomClick(floorPlan.rooms[i], i);
    });
  }
}

function onDOMLoad() {
  var svgObject = document.getElementById('floor-plan');
  svgObject.addEventListener('load', function() {
    onFloorPlanLoad(svgObject);
  });
}

function roomClick(room, i) {
  console.log('room: ' + (i+1));
  room.style.fill = 'blue';
  socket.emit('room', i+1);
}

document.addEventListener('DOMContentLoaded', onDOMLoad);