//get the packages
const express = require ("express")
const mongoose =require ("mongoose")

//initialize the app

const app = express()

//connect with the DB
mongoose.connect("mongodb+srv://todoApi:Toast2021@cluster0.ko9v9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    userNewUrlParser: true,
    userUnifiedTopology: true,
})
//routes
app.get('/',function(request,response){
    response.send("welcome to my Todo API")
}).then(function(){
    console.log('Database connected successfully')
}).catch(function(error){
    console.log('error!unable to connect')
})
// app.get('/api',function(req,res){
//     res.send("This to my API page")
// })

//listen at a point 
app.listen(8000,function(){

    console.log('My server is running successfully')
})