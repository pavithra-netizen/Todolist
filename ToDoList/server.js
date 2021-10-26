const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

const username = "TODOLIST";
const password = "TODOLIST";
const cluster = "mflix.ydixx";
const dbname = "Todolist";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      
      useUnifiedTopology: true
    }
  );
  

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});