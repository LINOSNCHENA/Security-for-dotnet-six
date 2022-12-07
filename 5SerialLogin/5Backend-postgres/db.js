const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'Pemba2018',
    host: 'localhost',
    port: '5432',
    database: 'presly'
})

module.exports = pool