var express = require('express');

var app = express.createServer(express.logger());

var fromfile = fs.readFileSync("index.html");

app.get('/', function(request, response) {

  if( fromfile.isBuffer ){
      response.send( fromfile.toString() );
  } else { 
      response.send("Not a buffer!");
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
