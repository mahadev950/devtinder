const express = require('express')

const app = express()

app.use('/hello',(req,res)=>{
    res.send("this is hello")
})


app.use('/test',(req,res)=>{
    res.send("this is test")
})

app.listen(3000,()=>{
    console.log('server is running at port at 3000')
})