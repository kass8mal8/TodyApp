const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../model/user')
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

const local_strategy = new LocalStrategy({
    usernameField: 'email'
}, async ( username, password, done ) => {
    try {
        const user = await User.findOne({email: username})
        const valid = await User.validPassword(username, password)
        
        if(!user || !valid) {
            return done(null, false, {
                message: 'Incorrect credentials'
            })
        }

        return done(null, user)
       
    } catch (error) {
        console.log(error.message)
    }
    
});

const google_strategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'example.com'
}, async (accessToken, refreshToken, profile, cb) => {
    await User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return cb(err, user)
    })
})

passport.use(local_strategy)
passport.use(google_strategy)
