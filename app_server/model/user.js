const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const options = {
    type: String,
    required: true
}
const userSchema = new Schema({
    email: {
        ...options,
        unique: true
    },
    first_name: options,
    last_name: options,
    password: options
})


userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
    next()
})

userSchema.statics.validPassword = async function(email, password) {
    const user = await this.findOne({ email })

    if(user){
        const auth = await bcrypt.compare(password, user.password)
        return auth ? true : false
    }
    
}

const User = model('user', userSchema)
module.exports = User
