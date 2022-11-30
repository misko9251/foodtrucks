const express = require('express');
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config({path: './config/.env'});
const truckRoutes = require('./routes/truckRoutes')

connectDB()

// Middleware
app.use(express.urlencoded({ extended: true }));    // use express to parse the form data
app.use(express.json());    // use express to parse json data
app.use(cors({
    origin: 'http://localhost:3000'
}))

// Routes

app.use('/trucks', truckRoutes)

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})