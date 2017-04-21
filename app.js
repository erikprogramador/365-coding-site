const express = require('express')
const app = express()
const { join } = require('path')

app.set('view engine', 'hbs')
app.set('views', join(__dirname, '/resources/views'))

app.use('/', require('./src/Base/routes.js'))

module.exports = app
