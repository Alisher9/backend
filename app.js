//we use body-parser, it's Node js body parsing middleware
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/input", function (req, res) {
    res.sendFile(__dirname + "/input.html");
});

app.post("/input", function (req, res) {
    var user_name = req.body.name;
    var user_surname = req.body.surname;
    res.send(user_name, user_surname);
    console.log("Hi, my name is "+ user_name + ", and surname is " + user_surname);
    res.end("yes");
});

app.listen(3000, function(){
  console.log("started on 3000");
});
