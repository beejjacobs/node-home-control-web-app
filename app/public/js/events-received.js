/**
 * Received events from the server
 */
socket.on('houseName', function(data) {
  console.log('houseName: ' + data.value);
});

socket.on('light', function(data) {
  console.log(data);
});