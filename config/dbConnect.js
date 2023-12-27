const mongoose=require('mongoose')

const dbconnect=()=>
{
    try
    {
        const conn=mongoose.connect("mongodb+srv://moquuet123@cluster0.g4lvs.mongodb.net/TodoApp?retryWrites=true&w=majority")
        console.log("DataBase Connected");
    }
    catch(err)
    {
        console.log("DataBase Error")
    }
}

module.exports=dbconnect;
