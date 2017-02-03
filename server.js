var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(process.cwd() + "/public"));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// require("./controllers/seeds.js")(app);
require("./controllers/prodigee_controller.js")(app);
require("./controllers/html-routes.js")(app);

db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
