const { Schema, model } = require('mongoose')

const options = {
    type: String,
    required: true
}

const todoSchema = new Schema({
    user_id: options,
    title: options,
    description: options,
    time: options,
    date: options
}, { 
    timestamps: true 
})

const Todo = model('todo', todoSchema)
module.exports = Todo
