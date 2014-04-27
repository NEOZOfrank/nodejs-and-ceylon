var express = require('express');


var myCeylon = require('./nodeceylon-1.0.0.js');


var app = express();

app.get('/ceylon', function(req, res){
	var name = req.param('name');

	// ceylon stuff
	res.send(name);
 
});


app.listen(3000);
console.log('Listening on port 3000');

