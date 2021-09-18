const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const fs = require('fs')

// EXPRESS SPECIFIC
// serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded())


// PUG SPECIFIC 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', function(req, res){
    const params = {
        'title' : "Gym Subscription Form",
        'para1' : "Mindblowing offer for all the hardcores gym goers out there."

    }
    res.render('index.pug', params);
});

app.post('/', function(req, res){

    // console.log(req.body) 
    // Gets you the output as an object in the terminal

    names = req.body.names
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more


    let outputToWrite = `the name of the client is ${names}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})


// SERVER LISTENING PORT
app.listen(port, function(){
    console.log(`The server is started successfully at port ${port}`);
})

