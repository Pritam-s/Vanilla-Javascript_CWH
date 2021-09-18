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
    res.render('index.pug')
})


// PORT LISTEN
app.listen(port, function(){
    console.log(`The server is succesfully started on port ${port}`);
})
