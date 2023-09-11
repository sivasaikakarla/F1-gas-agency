const express = require("express");

const bodyParser = require("body-parser");
const mongoose =  require("mongoose");


const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://0.0.0.0:27017/F1",{useNewUrlParser: true});


const routes =  require("./routes/router");

app.use(routes);



app.listen(3001, function () {
    console.log("Server started on port 3001.");
}); 