var Sequelize = require("sequelize");

var sequelize = new Sequelize("prodigee_db", "root", "36xmax",{
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
