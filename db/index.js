const moongoose = require("mongoose")
const express = require("express")
const { default: mongoose } = require("mongoose")



// node seed/items.js
// mongoose
// use itemsDatabase
// db.items.find()

let MONGODB_URL = process.env.PROD_MONGODB || process.env.MONGODB_URL || "YOUR DATABASE LINK"

mongoose.connect(MONGODB_URL, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB")
    })
    .catch((e) => {
        console.error("Connection error", e.message)
    })

const db = mongoose.connection

module.exports = db

