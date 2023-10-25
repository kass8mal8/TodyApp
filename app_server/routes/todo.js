const { Router } = require('express')
const { 
    addTodo, 
    editTodo, 
    removeTodo, 
    getTodos, 
    markComplete 
} = require('../controllers/todo')
const router = Router()

router.post('/add-todo', addTodo)
router.patch('/update/:todo_id', editTodo)
router.delete('/delete/:todo_id', removeTodo)
router.get('/:user_id', getTodos)
router.patch('/update/:todo_id', markComplete)

module.exports = router
