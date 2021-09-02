// You can write " node .\IntroNode.js " to open this file in terminal and run it.


//In the line --> res.setHeader('Content-Type', 'text/html') you can set the type of content eg:- 'text/html,  'text/plain' etc;

// In the line --> res.end('Hello World'); You can change the content inside the bracket to anything . example, you can put HTML inside the bracket and it will be served. Just make sure to change the content type in the previous line and also You can use the 'Object Literal'.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JS Strings</title>
  
  </head>
  
  <body>  
      <div class="container" id="literals">
          Open up the browser console to see more.
          <br>
          There are many Js String function of which we will only see the 11 most useful ones as for now.
          <ol>
              <li> indexOf() </li>
              <li> lastIndexOf()</li>
              <li>slice()</li>
              <li>substring()</li>
              <li>substr()</li>
              <li>replace()</li>
              <li>toUpperCase()</li>
              <li>toLowerCase()</li>
              <li>concat()</li>
              <li>trim()</li>
              <li>charAt()</li>
          </ol>
  
      </div>
      </body>
      </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});