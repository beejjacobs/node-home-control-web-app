/**
 * Main app for Node Home Control Web App
 *
 * @author Ben Jacobs
 */

var express = require('express');
var app = express();

//set express parameters to render jade template
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000);