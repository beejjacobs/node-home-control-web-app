/**
 * Events and other javascript for control
 */
'use strict';

var floorPlan = {
  svg: null,
  rooms: []
};

function onFloorPlanLoad(svgObject) {
  floorPlan.svg = svgObject.contentDocument;
  floorPlan.rooms = floorPlan.svg.querySelectorAll("[id^='room']");
  console.log(floorPlan.rooms);
  for(let i = 0; i < floorPlan.rooms.length; i++) {
    console.log(floorPlan.rooms[i]);
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
document.addEventListener('DOMContentLoaded', onDOMLoad);

function roomClick(room, i) {
  console.log('room: ' + (i+1));
  room.style.fill = 'blue';
}