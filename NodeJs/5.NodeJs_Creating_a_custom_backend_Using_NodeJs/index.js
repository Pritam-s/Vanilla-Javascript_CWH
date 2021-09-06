// To make the server
const http = require ('http');
const fs = require('fs');

// To make the random localhost and port
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');

// Now we will create a server and give it an arrow function 
const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/') {
      res.end(home);
    }
    else if (url == '/about.html'){
      res.end(about);
    }
    else if (url == '/contact.html'){
      res.end(contact);
    }
    else if (url == '/services.html'){
      res.end(services);
    }
    else{
      res.statusCode = 404;
      res.end("<h1>404 not found</h1>");
  }
  });

// And finally, we will make the port to listen-
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });