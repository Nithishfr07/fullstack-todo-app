const todo=require('../models/todoModel')
const asyncHandler=require('express-async-handler')

const createTodo=asyncHandler(async(req,res)=>
{   
    
    try
    {
    const newTask=await todo.create(req.body);
    res.json(newTask)
    }
    catch(err)
    {
        console.log(err)
    }

})

const getTodo=asyncHandler(async(req,res)=>
{
    try
    {
    const allTask=await todo.find()
    res.json(allTask)
    }
    catch(err)
    {
        console.log("Error in getTodo")
    }

})

const updateTodo=asyncHandler(async(req,res)=>
{
    const {id}=req.params;
    try
    {
        const updated=await todo.findByIdAndUpdate(id,req.body,{new:true})
        res.json(updated)
    }
    catch(err)
    {
        console.log("Error in updateTodo")
    }
})

const deleteTodo=asyncHandler(async(req,res)=>
{
    const {id}=req.params;
    try
    {
        const deleted=await todo.findByIdAndDelete(id);
        res.json(deleted)
    }
    catch(err)
    {
        console.log("Error in deleteTodo")
    }
})
module.exports={createTodo,getTodo,updateTodo,deleteTodo}