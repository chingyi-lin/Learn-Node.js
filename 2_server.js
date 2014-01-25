//Iris Ching-Yi Lin, 20140126
//To set up a basic HTTP server which can response Hello World
//Run this 2_server.js on console and use your browser to access http://localhost:8888/
var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});//200 is the condition of HTTP
	response.write("Hello World");
	response.end();
}).listen(8888);//8888 is the port number
