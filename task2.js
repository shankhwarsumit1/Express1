const express = require('express');

const app = express();

app.get('/orders',(req,res)=>{
    res.end('<h1>Here is the list of all ordres</h1>');
})

app.post('/orders',(req,res)=>{
     res.end('<h1>A new order has been created</h1>');
})

app.get('/users',(req,res)=>{
         res.end('<h1>Here is the list of all the users</h1>');

})

app.post('/users',(req,res)=>{
res.end('<h1>A new user has been added</h1>');

})


app.listen(3000,()=>{
    console.log('server is runnig on');
})
