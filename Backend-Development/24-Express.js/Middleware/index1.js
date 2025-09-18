import express from "express";
import bodyParser from "body-parser";   // This is to parse things written in the form
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended : true}));    // using body-parser as a middleware

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");    // Cause of this line i can have my HTML on local host server
  res.sendFile(__dirname + "/public/index.html");   // Here res.sendFile sends back the file from the written path
});

app.post("/submit" , (req , res) =>{
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
