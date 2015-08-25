var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});




var port = process.env.PORT || 3000;
var server = app.listen(port);

console.log('listening on port ', port);

