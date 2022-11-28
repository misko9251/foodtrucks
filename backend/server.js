const express = require('express');
const app = express()
require('dotenv').config({path: './config/.env'});

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})