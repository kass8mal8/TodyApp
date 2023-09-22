const { Router } = require('express')
const { addTodo, editTodo, removeTodo, getAllTodos, getSingleTodo } = require('../controllers/todo')
const router = Router()

router.post('/add-todo', addTodo)
router.patch('/update/todo_id', editTodo)
router.delete('/delete/todo_id', removeTodo)
router.get('/', getAllTodos)
router.get('/todo_id', getSingleTodo)

module.exports = router
