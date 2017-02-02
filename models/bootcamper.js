module.exports = function(sequelize, DataTypes) {
  var Bootcamper = sequelize.define("bootcamper", {
    name:{
      type: DataTypes.STRING
    },
    email:{
      type: DataTypes.STRING
    },
    password:{
      type: DataTypes.INTEGER
    },
    image:{
      type: DataTypes.STRING
    },
    city:{
      type: DataTypes.STRING
    },
    state:{
      type: DataTypes.STRING
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
