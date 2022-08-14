require("dotenv").config();
console.log("what the fuck3")
const { Sequelize } = require("sequelize");


console.log("what the fuck")
exports.sequelize = new Sequelize(process.env.MYSQL_URI);
   