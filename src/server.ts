require('dotenv').config()

import express = require('express')
const connectDB = require('./config/db')

const indexRoute = require('./routes/router-index')

const httpPort = process.env.PORT || 8080

connectDB().then()

// init the app
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', indexRoute)

app.listen(httpPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is alive on port: ${httpPort} running as: ${process.env.NODE_ENVIROMENT}`)
})