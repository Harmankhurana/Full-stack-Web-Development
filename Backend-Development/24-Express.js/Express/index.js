// Creating a backend server using Node.js and Express.js
// const express = require("express");
// OR
import express from "express"; 
const app = express();

app.get("/hello" , (req , res) =>{
    res.send("Hello I'm in the server")
})

app.get("/contact" , (req , res) =>{
    res.send({
        message : [    // Making an array
            "harmankhurana19@gmail.com",
            "7357304047"
        ]
    })
})

app.get("/about" , (req , res) =>{
    res.send({
        message : "I'm a Software Engineer",
    })
})

app.listen(3000 , () =>{
    console.log("Server started on port 3000");  // this can be seen in termainal 
});