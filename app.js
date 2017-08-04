var express = require("express");
var app = express();

var port = 3000;

var random = require("./randomNumber.js");
console.log(random);

var dollar = require("./convertToDollars.js");
console.log(dollar);

app.listen(port, function() {
    console.log("listening on port 3000");
});

