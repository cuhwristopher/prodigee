module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("applciation", {
    bootcamper_id:{
      type: DataTypes.INTEGER
    },
    job_id:{
      type: DataTypes.INTEGER
    },
    hired:{
      type: DataTypes.BOOLEAN
    }
  });
  return Application;
}
