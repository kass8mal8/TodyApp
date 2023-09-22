const { Router } = require('express')
const router = Router()

const todoRoute = require('./todo')

router.use('/todo', todoRoute)

module.exports = router