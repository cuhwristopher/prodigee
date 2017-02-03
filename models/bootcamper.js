module.exports = function(sequelize, DataTypes) {
  var Bootcamper = sequelize.define("bootcamper", {
    first_name:{
      type: DataTypes.STRING
    },
    last_name:{
      type: DataTypes.STRING
    },
    zip:{
      type: DataTypes.INTEGER
    },
   frontend_skill:{
      type: DataTypes.INTEGER
    },
    backend_skill:{
      type: DataTypes.INTEGER
    }
  });
  return Bootcamper;
}
