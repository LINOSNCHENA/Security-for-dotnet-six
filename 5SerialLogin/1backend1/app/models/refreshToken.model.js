const { db, Sequelize } = require("../config/db.config");

const RefreshToken = db.define("refreshToken", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  token: {
    type: Sequelize.STRING,
  },
  expiryDate: {
    type: Sequelize.DATE,
  },
});
module.exports = RefreshToken;
