var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
require("./controllers/prodigee_controller.js")(app);

=======
>>>>>>> 2c7b782e0e4fa0099191b8841c3fc2d72d18410a
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
