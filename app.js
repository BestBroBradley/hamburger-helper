const express = require("express")

var PORT = process.env.PORT || 8080;

var app = express()


app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require('./controllers/burgerController.js')

app.use(routes)

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });