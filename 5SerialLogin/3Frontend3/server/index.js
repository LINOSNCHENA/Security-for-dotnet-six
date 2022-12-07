//import express from 'express'
const express = require('express')

// import bodyParser from 'body-parser'

const app = express()
app.use(express.json());


//app.use(bodyParser.json())

app.use('/', require('./routes'))

//module.exports = app
