var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is TECHESSAY, let me check'); //write a response to the client
  res.end(); //end the response.
}).listen(6000); //the server object listens on port 6000
