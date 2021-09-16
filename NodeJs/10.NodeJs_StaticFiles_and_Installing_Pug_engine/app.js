// Through the below codes, we have installed the module and at the same time created an express app.
const express = require('express');
const app = express();
const port = 80;
const path = require('path');

// For serving static files
app.use('/static', express.static('static'))

// For setting the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))


// GET method route
app.get('/', function (req, res) {
    res.status(200).send('This is the express app.')
});

app.listen(port, function (){
    console.log(`The application started successfully on port ${port}`);
});


//Pug demo endpoing. Calling the index.pug from the views directory
app.get('/demo', function (req, res) {
    res.status(201).render('demo', { title: 'Hey Pritam', message: `Hello there! this the first time i'm using pug template engine.` })
  })

