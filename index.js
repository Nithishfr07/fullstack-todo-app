const express=require('express')
const dbconnect = require('./config/dbConnect')
const app=express()
const dotenv=require('dotenv').config()
const PORT=3000 || process.env.PORT
const todoRouter=require('./routes/todoRoute')
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use('/api/',todoRouter)


app.listen(3000,()=>
{   
    dbconnect();
    console.log("Server is running Successfully");
})