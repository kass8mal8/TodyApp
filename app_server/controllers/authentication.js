const passport = require('passport')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

// const maxAge = 24 * 60 * 60
const createToken = (payload) => {
    return jwt.sign(payload, SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256'
    })
}

// const cookieOptions = {
//     httpOnly: true,
//     maxAge: 50000
// }

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

        const payload = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_id: user._id
        }

        const token = createToken(payload)
        console.log(token)
        // res.cookie('jwt', token, cookieOptions)
        
        res.status(200).json({
            message: 'Account created successfully',
            token
        })

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
            const payload = {
                user_id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }

            const token = createToken(payload)
            res.status(200).json({
                message: "Signin was successful",
                token
            })
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