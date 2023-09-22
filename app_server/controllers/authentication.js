const passport = require('passport')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const maxAge = 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, SECRET, {
        expiresIn: maxAge
    })
}

const register = async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    
    if(!first_name || !last_name || !email || !password) {
        return res
        .status(400)
        .json({ 
            "message": "All fields are required"
        })
    }

    try {
        const user = await User.create({ first_name, last_name, email, password })
        console.log(user)
        const token = createToken(user._id)
        console.log('registered successfully')
        res.status(200).json(token)

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) {
        return res
        .status(400)
        .json({ 
            "message": "All fields are required"
        })
    }

    passport.authenticate('local', (err, user, info) => {
        if(err) return res.status(404).json(err)
        if(user) {
            const token = createToken(user._id)
            res.status(200).json(token)
        }
        else {
            res.status(401).json(info)
        }
    })(req, res)
}

module.exports = {
    register, 
    login
}