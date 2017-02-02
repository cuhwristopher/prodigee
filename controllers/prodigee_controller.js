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
    app.post("/job-posting/postJob", function(request, response){
        db.job.create({
          title: request.body.job.title,
          description: request.body.job.description,
          pay: request.body.job.pay
        })
    })
};
