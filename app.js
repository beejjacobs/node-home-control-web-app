/**
 * Main app for Node Home Control Web App
 *
 * @author Ben Jacobs
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
