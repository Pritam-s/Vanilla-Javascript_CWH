const express = require('express');
const app = express();
const port = 80;
const path = require('path');

// EXPRESS SPECIFIC
// serving static files
app.use('/static', express.static('static'));


// PUG SPECIFIC 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', function(req, res){
    params = {
        'title' : "Gym Subscription Form",
        'para1' : "Mindblowing offer for all the hardcores gym goers out there."

    }
    res.render('index.pug', params);
});


// SERVER LISTENING PORT
app.listen(port, function(){
    console.log(`The server is started successfully at port ${port}`);
})

