const express = require('express')

const app = express()




app.get('/user',(req,res)=>{
    res.send({firstname:"mahadev",email:"mahadev@gmail.com"})
})

app.post('/user',(req,res)=>{
    res.send({firstname:"mahadevsharma",email:"mahadev@gmail.com"})
})

//this will match all http method api calls
app.use('/test',(req,res)=>{
    res.send("this is test")
})



app.listen(3000,()=>{
    console.log('server is running at port at 3000')
})