const express = require('express')
const app = express()

app.use('/', require('./src/Base/routes.js'))

module.exports = app
