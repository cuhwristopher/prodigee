var db = require("../models");

module.exports = (app) => {
    app.get("/", (request, response) => {
      db.Jobs.findAll({}).then(function(allJobs){
        var hbsObject = {
          jobs: allJobs
        };
      })
         response.render("index", hbsObject);
    });
};
