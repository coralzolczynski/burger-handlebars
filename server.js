const express = require("express");
const exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {console.log("Server listening on http://localhost:" + PORT)});