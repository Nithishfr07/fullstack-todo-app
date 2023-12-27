const express=require('express')
const { createTodo, getTodo, updateTodo, deleteTodo } = require('../controller/todoCtrl')
const router=express.Router()


router.post('/createtodo',createTodo)
router.get('/gettodo',getTodo)
router.put('/updatetodo/:id',updateTodo)
router.delete('/deletetodo/:id',deleteTodo)

module.exports=router