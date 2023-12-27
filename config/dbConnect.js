const mongoose=require('mongoose')

const dbconnect=()=>
{
    try
    {
        const conn=mongoose.connect("mongodb://127.0.0.1:27017/todo")
        console.log("DataBase Connected");
    }
    catch(err)
    {
        console.log("DataBase Error")
    }
}

module.exports=dbconnect;