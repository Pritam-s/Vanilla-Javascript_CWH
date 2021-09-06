// To make the server
const http = require ('http');
const fs = require('fs');

// To make the random localhost and port
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const 

// Now we will create a server and give it an arrow function 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);
  });

// And finally, we will make the port to listen-
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });