const express = require('express');
const app = express();
const port = 80;
const path = require('path');


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))


// ENDPOINTS 
app.get("/", function(req, res){
    // const content = "This is the 1st time i'm doing this" 
    const params = {
    'title': 'GTAV is the best game in the world so far.',
    'content' : "This is the 2nd time im doing this",
    'paragraph1' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae culpa, consequatur blanditiis placeat eaque voluptate beatae dolores molestias obcaecati architecto repellendus.",
}
    res.status(200).render('index.pug', params)
})


// SERVER
app.listen(port, function(){
    console.log(`The server is succesfully started on port ${port}`)
});






