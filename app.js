var express = require("express");

var app = express();

app.set("view engine", "hbs");

app.get("/", function(request, response){
    
   response.send("Главная ");
});
app.get("/project", function(request, response){
    
   response.render("project.hbs");
});
app.listen(3000);
// cwebp cat.jpg -o cat.jpg.webp
app.use('/publish',express.static(__dirname +'/publish/'));