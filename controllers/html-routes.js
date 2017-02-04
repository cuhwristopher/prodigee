// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/signup.html"));
  });
  // add route loads the post-job.html page,
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  });
  // add route loads the post-job.html page,
  app.get("/create-job", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/create-job.html"));
  });
  // add route loads the post-job.html page,
  app.get("/post-job", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/post-job.html"));
  });

};
