/**
 * Main file for Node Home Control Web App
 *
 * @author Ben Jacobs <ben@bljacobs.co.uk>
 *
 */

var HomeControl = require('./lib/home-control');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var config = require('./config.json');

//set express parameters to render jade template
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', {config: config});
});

http.listen(3000, function(){
    console.log('Server listening on port 3000');
});

new HomeControl(io, config);