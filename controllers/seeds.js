var db = require("../models");

module.exports = function jobSeeds(){
    db.job.create({
      title: "Build CRM for small business",
      description: "We need a web based application to manage incoming customer request for our cupcake delivery company.",
      pay: 1000
    }).then(function(dbJob){
      console.log("dbJob");
    });

    db.job.create({
      title: "Uber killer",
      description: "We,re going to be the next uber.",
      pay: 100
    }).then(function(dbJob){
      console.log("dbJob");
    });

    db.job.create({
      title: "Build Portfolio for Artist",
      description: "Need an online portfolio for my amazing work.",
      pay: 12000
    }).then(function(dbJob){
      console.log("dbJob");
    });
}
