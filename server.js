var express = require('express');

// Configure the server
var app = express();
app.use(express.static(__dirname + '/public')); // tell Express to serve the contents of static files located at /public

// any other requests should result in 404 error
app.get('*', function (req, res){
	res.status(404);
	res.render('error.html', {errorMessage: '404 Page Not Found'});
});

// listen for connection on port 8080 at domain localhost
app.listen(8080, function(){
	console.log("Listening on port 8080");
});
