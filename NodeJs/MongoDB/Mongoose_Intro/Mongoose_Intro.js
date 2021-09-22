// getting-started.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Pritamshop', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // connection error output

db.once('open', function() {
    // we're connected! output
    console.log('We are connected')
});

// Schema creation
const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name;
    console.log(greeting);
  }

  
// Making a collection i.e. plural form of the given parameter. here it's "Kitten"
const Kitten = mongoose.model('Kitten', kittySchema);


const harryKitty = new Kitten(
    { 
        name: 'harryKitty Name' 
    }
); 
// Making objects
// console.log(harryKitty.name); // 'Silence'
// harryKitty.speak();


harryKitty.save(function (err, harryKitty) {
    if (err) return console.error(err);
    harryKitty.speak();
});


  