const express = require('express');
const app = express();
const port = 80;
// Through the above codes, we have installed the module and at the same time created an express app.

app.get("/", (req, res)=>{
    res.send("This is the homepage of my first Express app.")
});

app.post("/about", (req, res)=>{
    res.send("This is the Aboutpage of my first Express app.")
});

app.post("/error", (req, res)=>{
    res.status(404).send("this is the discarded page and will throw an status code 404.")
});   
// You can use the status method to give the status code of an page.


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
});