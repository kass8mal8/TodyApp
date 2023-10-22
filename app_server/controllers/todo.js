const Todo = require('../model/todo')

const addTodo = async(req, res) => {
    const { title, description, date, time, user_id } = req.body

    try {
        const todo = await Todo.create({
            title, 
            description, 
            date, 
            time, 
            user_id
        })

        res.status(200).json({ 
            message: `${todo.title} added successfully`
        })
    } catch (error) {
        res.status(400).json(err)
    }
}

const editTodo = async(req, res) => {
    const { title, description, date, time } = req.body
    const todo_id = req.params.todo_id

    const update = { title, date, description, time }

    try {        
        const todo = await Todo.findByIdAndUpdate(todo_id, update)
        console.log(todo)
        if(!todo) {
            res.status(404).json({message: "Document not found" })
        }

        res.status(200).json({ message: `${todo.title} updated successfully` })

    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}

const removeTodo = async(req, res) => {
    const todo_id = req.params.todo_id

    try {
        const todo = await Todo.findByIdAndDelete(todo_id)

        if(!todo) {
            res.status(404).json({
                message: "Document not found"
            })
        }
        res.status(200).json({
            message: `${todo.title} deleted successfully`
        })
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// todos for a single person
const getTodos = async(req, res) => {
    const user_id = req.params.user_id
    console.log("ID: ", user_id)

    try {
        const todo = await Todo.find({user_id})
        console.log(todo)
        res.status(200).json(todo)
    } catch (error) {
        res.status(404).json({ message: "Document not found" })
    }
}

module.exports = {
    addTodo,
    editTodo,
    removeTodo,
    getTodos
}
