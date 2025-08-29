// Making a status code respond code
import express from "express";
const app = express();
const port = 3000;

app.get("/" , (req , res) =>{
    res.send("Home Page");
})

app.post("/register" , (req , res)=>{
    res.sendStatus(201);
})

app.put("/user/harman" , (req , res)=>{
    res.sendStatus(200);
})

app.patch("/user/harman" , (req , res)=>{
    res.sendStatus(200);
})

app.delete("/user/harman" , (req , res)=>{
    res.sendStatus(200);
})

app.listen(`${port}`, 
    console.log(`Server has started on ${port}`),
)