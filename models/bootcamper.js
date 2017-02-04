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
    },html:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      css:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      javascript:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      jquery:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      node:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      express:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      php:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      java:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      python:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      react:{
        type: DataTypes.BOOLEAN, defaultValue: false
      },
      mysql:{
        type: DataTypes.BOOLEAN, defaultValue: false
      }
  });
  return Bootcamper;
}
