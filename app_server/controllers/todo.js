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
    const { todo_id } = req.params

    const update = {
        title: title && title,
        date: date && date,
        description: description && description,
        time: time && time,
    }

    try {
        await Todo.findByIdAndUpdate( todo_id , update, (err, docs) => {
            if(err) {
                console.log(`Error: ${err.message}`)
                res.status(500).json(err)
            }
            else {
                res.status(200).json({
                    message: `${docs.title} updated successfully`
                })
            }
        })
        
    } catch (error) {
        res.status(400).json(err)
    }
}

const removeTodo = async(req, res) => {
    const { todo_id } = req.params

    try {
        await Todo.findByIdAndDelete(todo_id, (err, docs) => {
            if(err) {
                res.json(err)
            }
            else {
                res.status(200).json({
                    message: `${docs.title} deleted successfully`
                })
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllTodos = async(req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleTodo = async(req, res) => {
    const { todo_id } = req.params
    try {
        const todo = await Todo.find(todo_id)
        if(todo.length) res.status(200).json(todo)
        else {
            res.status(404).json({ message: "Document not found" })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    addTodo,
    editTodo,
    removeTodo,
    getAllTodos,
    getSingleTodo
}
