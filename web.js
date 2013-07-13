var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var fromfile = fs.readFileSync("index.html");

app.get('/', function(request, response) {

      response.send( 'Hi...!' );
      //response.semd( fromfile.toString() );
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
