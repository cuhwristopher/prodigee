module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("application", {
    hired:{
      type: DataTypes.BOOLEAN
    }
  });
  return Application;
}
