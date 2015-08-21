var express = require('express');
var app = express();

// Says what port this server will listen to
app.set('port', (process.env.PORT || 4000));

// setting up a file path of where this server will be accessing things
app.use(express.static(__dirname + '/public'));

// set a specific action to an endpoint
app.get('/secret', function(request, response) {
  response.send('Nobody here but us kittens.');
});

// catch-all 404 in casse the user requests an endpoint that does not exist
app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '/public/404.html');
});

// call the function tht makes the server start listening
app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});