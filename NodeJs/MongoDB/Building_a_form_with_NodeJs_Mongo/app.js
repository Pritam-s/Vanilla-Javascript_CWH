const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const port = 80;

// MONGOOSE SPECIFIC
    mongoose.connect('mongodb://localhost:27017/contactForm', {useNewUrlParser: true, useUnifiedTopology: true});

    const contactSchema = new mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      address: String
    });


    const Contact = mongoose.model('Contact', contactSchema);



// MONGOOSE SPECIFIC



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

app.post('/contact', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
    res.send("This item has been saved to the database")
  }).catch(()=>{
    res.status(400).send("item was not saved to the database")
})
})

// PORT LISTEN
app.listen(port, function(req, res){
  console.log(`The server is started succesfully at ${port}`);
})
