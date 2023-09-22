const { Router } = require('express')
const { login, register } = require('../controllers/authentication')
const router = Router()

router.post('/signin', login)
router.post('/signup', register)

module.exports = router
