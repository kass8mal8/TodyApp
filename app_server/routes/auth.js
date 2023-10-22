const { Router } = require('express')
const { login, register } = require('../controllers/authentication')
const router = Router()
const passport = require('passport')

router.post('/signin', login)
router.post('/signup', register)
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/auth/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/signin' 
    }), (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
})

module.exports = router
