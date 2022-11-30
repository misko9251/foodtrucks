const express = require('express');
const { connect } = require('mongoose');
const app = express()
const connectDB = require('./config/db')
require('dotenv').config({path: './config/.env'});

connectDB()

// Middleware
app.use(express.urlencoded({ extended: true }));    // use express to parse the form data
app.use(express.json());    // use express to parse json data

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})