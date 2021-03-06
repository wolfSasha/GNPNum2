var express = require("express");
var hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.get("/home", function(request, response){
    
   response.render("home.hbs");
});

app.get("/project", function(request, response){
    
   response.render("project.hbs");
});

app.listen(3000);
// cwebp cat.jpg -o cat.jpg.webp
app.use('/publish',express.static(__dirname +'/publish/'));
app.use('/style',express.static(__dirname +'/publish/style/'));