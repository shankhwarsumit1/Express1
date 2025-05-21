const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.send("<h1>My first express server</h1>");
    console.log("Server is up and running on port 3000! Ready to handle requests.");

})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});