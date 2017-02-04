const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.bootcamper = require("../models/bootcamper.js")(sequelize, Sequelize);
db.application = require("../models/application.js")(sequelize, Sequelize);
db.job = require("../models/job.js")(sequelize, Sequelize);
m
db.job.hasMany(db.application);
db.application.belongsTo(db.bootcamper);

module.exports = db;
