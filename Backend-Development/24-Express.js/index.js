// Creating a backend server using Node.js and Express.js
const express = require("express");
const app = express();

app.get("/" , (req , res) =>{
    res.send({
        "message" : "Hello I'm in the server",
    })
})

app.listen(3000);