// https://nodejs.org/en
// Using a Native Node module, which is File(fs) - writing and reading 
const fs = require("fs");

fs.writeFile("node.txt" , "Hello from NodeJS" , function(err , data){
    if(err) throw err;
    console.log("The file has been saved!");
});


fs.readFile("./Node.txt" , "utf-8" , function(err, data){
    if(err) throw err; 
    console.log(data);
});