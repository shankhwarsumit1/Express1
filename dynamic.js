import express from 'express';

const app = express();

app.get('/welcome/:username',(req,res)=>{
    const username = req.params.username;
    const role = req.query.role;
    res.send(`Welcome ${username},your role is ${role}`);
});

app.listen(3000,()=>{
    console.log('server is running on')
})
