// Inserting Data in MongoDB

use Pritamshop
db.items.insertOne({
    names: "Motorola droid RAZR", 
    price : 35999, 
    ratings: 4.2, 
    androidversion : 4.4
})

db.items.insertMany([
    {
        names:"Huawei Honor 4x",
        price: 10999,
        ratings: 4.5,
        androidversion : 7
    }
    ,
    {
        names:"Motorola Moto G5s plus",
        price: 15999,
        ratings: 4.3,
        androidversion: 11
    }
    ,
    {
        names: "Mi 9t Pro (Raphael)",
        price: 31999,
        ratings: 4.8,
        androidversion: 11
    }
]

// Searching/Querying data from the Mongo Database :-

db.items.find({rating: {$gte: 3.5}}) // This query will return all the objects with rating equal to 3.5

db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}}) // And operator

db.items.find({
    $or:[{ratings: {$gte:4.5}}, {androidversion: {$gte:4.7}}]
    })
) // Or operator



// Deleting items from the Mongo database
db.items.find({price:{$gte:20000}})

db.items.deleteOne({price:{$gte:20000}})

db.item.deleteMany({price:{$gte:20000}})



// CRUD (Create, Read, Update, Delete)
db.seconditems.insertMany([
    {
        Model : "Lenovo Z560",
        Year : 2010,
        CPU : "i5 Legacy",
        Ram : "3 GB"
    }
    ,
    {
        Model : "Raspberry Pi 4B",
        Year : 2020,
        CPU : "Broadcom 2711",
        Ram : "8 GB"
    }
    ,
    {
        Model : "Predator Helios 300",
        Year : 2018,
        CPU : "i7 7700 HQ" ,
        Ram : "16 GB"
    }
])