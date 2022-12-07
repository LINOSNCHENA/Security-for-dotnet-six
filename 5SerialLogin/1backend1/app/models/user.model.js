const { db, Sequelize } = require("../config/db.config");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  fullname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});
module.exports = User;
