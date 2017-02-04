var db = require("../models");

module.exports = (app) => {
    app.get("/", (request, response) => {
      db.job.findAll({}).then(function(allJobs){
        var hbsObject = {
          jobs: allJobs
        };
        response.render("index", hbsObject);
        console.log(hbsObject);
      })
    });
    app.post("/signup/create_profile", function(request, response){
        db.bootcamper.create({
          first_name: request.body.first_name,
          last_name: request.body.last_name,
          zip: request.body.zip,
          frontend_skill: request.body.frontend_skill,
          backend_skill: request.body.backend_skill,
        }).then(function(newUser){
          var userId = newUser.id;
          response.redirect("/user-profile/" + userId);
    });
  });
    app.get("/user-profile/:userId", (request, response) =>{
      db.bootcamper.findOne({
          where: {
            id: request.params.userId
          }
        }
      ).then(function(currentUser){
        var hbsObject = {
          bootcampers: currentUser
        };
          response.render("user-profile", hbsObject);
          console.log(hbsObject);
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
