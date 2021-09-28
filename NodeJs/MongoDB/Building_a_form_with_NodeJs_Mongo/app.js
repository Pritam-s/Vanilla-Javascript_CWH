const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;


// EXPRESS SPECIFIC
app.use(express.urlencoded());
app.use('static', express.static('static'));


// PUG SPECIFIC
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', function(req, res){
  res.render('home.pug');
})

app.get('/about', function(req, res){
  res.status(200).render('about.pug')
})

app.get('/contact', function(req, res){
  res.status(200).render('contact.pug')
})

// PORT LISTEN
app.listen(port, function(req, res){
  console.log(`The server is started succesfully at ${port}`);
})

