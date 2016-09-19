var express = require('express');
var app = express();

app.listen(3000, function() {
	console.log("listening .....");
})

app.get('/', function(request, response, next){
	response.send("HIIIII!");
})