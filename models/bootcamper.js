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



module.exports = function(sequelize, DataTypes) {
  var BootcamperLanguages = sequelize.define("language", {
    bootcamper_id:{
      type: DataTypes.INTEGER
    },
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

module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("jobs", {
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



module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("bootcamper", {
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
