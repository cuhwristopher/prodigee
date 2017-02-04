var db = require("../models");

module.exports = (app) => {
    app.get("/", (request, response) => {
      db.job.findAll({}).then(function(allJobs){
        var hbsObject = {
          jobs: allJobs
        };
        response.render("index", hbsObject);
      })
    });
    app.post("/signup/newuser", function(request, response){
        db.bootcamper.create({
          first_name: request.body.first_name,
          last_name: request.body.last_name,
          zip: request.body.zip,
          frontend_skill: request.body.frontend_skill,
          backend_skill: request.body.backend_skill,
        }).then(function(newUser){
          var hbsObject = {
            bootcampers: newUser
          }
      response.render("profile", hbsObject);
    });
  });
    app.post("/postjob", function(request, response){
        db.job.create({
          title: request.body.title,
          description: request.body.description,
          pay: request.body.pay
        });
    });
  };
