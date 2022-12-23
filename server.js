const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
// const session = require('express-session')
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const homepageRoute = require('./routes/homepage-route')
// const editRoute = require('./routes/edit-router')
// const signupRoute = require('./routes/signup-router')
const PORT = 2121

connectDB()

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));


app.use("/", homepageRoute)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })
    