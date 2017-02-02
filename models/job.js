var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js")

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("job", {
    title:{
      type: DataTypes.STRING
    },
    description:{
      type: DataTypes.BLOB
    },
    pay:{
      type: DataTypes.INTEGER
    }
  });
  return Job;
}
