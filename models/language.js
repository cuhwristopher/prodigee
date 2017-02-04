module.exports = function(sequelize, DataTypes) {
  var BootcamperLanguages = sequelize.define("language", {
    html:{
      type: DataTypes.BOOLEAN
    },
    css:{
      type: DataTypes.BOOLEAN
    },
    javascript:{
      type: DataTypes.BOOLEAN
    },
    jquery:{
      type: DataTypes.BOOLEAN
    },
    node:{
      type: DataTypes.BOOLEAN
    },
    express:{
      type: DataTypes.BOOLEAN
    },
    php:{
      type: DataTypes.BOOLEAN
    },
    java:{
      type: DataTypes.BOOLEAN
    },
    python:{
      type: DataTypes.BOOLEAN
    },
    react:{
      type: DataTypes.BOOLEAN
    },
    mysql:{
      type: DataTypes.BOOLEAN
    },
    go:{
      type: DataTypes.BOOLEAN
    }
  })
  return BootcamperLanguages;
}
