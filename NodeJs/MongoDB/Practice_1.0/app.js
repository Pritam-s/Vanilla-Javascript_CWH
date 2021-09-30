const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 80;


// EXPRESS SPECIFIC 
app.use(express.urlencoded());
app.use('static', express.static('static'));


// PUG SPECIFIC
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINT
app.get('/', function(req, res){
    res.status(200).render('home.pug');
})

app.get('/services', function(req, res){
    res.status(200).render('services.pug');
})

app.get('/about', function(req, res){
    res.status(200).render('about.pug');
})

app.get('/contact', function(req, res){
    res.status(200).render('contact.pug');
})

app.post('/contact', function(req, res){
    
})



// PORT LISTEN
app.listen(port, function(req, res){
    console.log(`The server is started succesfully on ${port}`);
})
