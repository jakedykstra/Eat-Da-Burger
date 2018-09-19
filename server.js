let express = require("express");
let bodyParser = require("body-parser");
require('dotenv').config()

let PORT = process.env.PORT || 8080;

let app = express();

// front end code here
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Using routes 
let routes = require("./controllers/burger_controller.js");
app.use(routes);

// Let's go! Start the server!
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});