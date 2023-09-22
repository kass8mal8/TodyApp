const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const logger = require('morgan')

require('dotenv').config()
require('./config/passport')

const authRoute = require('./routes/auth')
const apiRoute = require('./routes/api')

app.use(cors())
app.use(cookieParser())
app.use(passport.initialize())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', authRoute)
app.use('/api', apiRoute)

module.exports = app
