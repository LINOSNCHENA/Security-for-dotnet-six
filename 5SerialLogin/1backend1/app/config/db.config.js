const Sequelize = require("sequelize");

const db = new Sequelize("postgres://postgres:Pemba2018@localhost:5432/presly");

module.exports = { db: db, Sequelize: Sequelize };
