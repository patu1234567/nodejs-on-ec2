var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud.'); //write a response to the client
  res.end(); //end the response.
}).listen(9000); //the server object listens on port 9000
