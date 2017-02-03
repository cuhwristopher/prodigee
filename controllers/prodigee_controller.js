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
    app.post("/postjob", function(request, response){
        db.job.create({
          title: request.body.job.title,
          description: request.body.job.description,
          pay: request.body.job.pay
        })
    })
    app.get("/:job_id", function(request, response){
      db.job.findOne({
        where:{
          job_id: request.body.job_id
        }
      }).then(function(applyJob){
        res.redirect(":job_id/apply");
      });
  })
};
