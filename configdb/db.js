const sql = require('mssql');

const config = {
    user: "sa",
    password: "sa",
    database: "DbUsersActivity",
    server: "DESKTOP-PC984OO",
    requestTimeout: 5 * 10000,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}
const poolPromise = new sql.ConnectionPool(config).connect().then((pool) => {
    console.log("SQL is connected");
    return pool;
})

module.exports = { sql, poolPromise };