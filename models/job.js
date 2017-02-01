module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
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
  return Jobs;
}
