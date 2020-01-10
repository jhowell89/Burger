var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
//app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Import routes and give server access to them
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);


app.listen(PORT, ()=>{
    //Log (server-side) that server has started
    console.log(`Connected on port: ${PORT}`);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main.handlebars"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.handlebars"));
  });