const mssql = require("mssql/msnodesqlv8");

const config = {
  driver: "msnodesqlv8",
  server: "DESKTOP-BOC9JRS\\SQLEXPRESS",
  database: "FaceBook",
  user: "sa",
  password: "1",
  options: {
    ecrypt: false,
    enableArithAbort: false,
    trustedConnection: true,
  },
  connectionTimeout: 300000,
  requestTimeout: 300000,
  pool: {
    idleTimeoutMillis: 300000,
    max: 100,
  },
};

const pool = new mssql.ConnectionPool(config);
async function ExcuteQuery(query) {
  try {
    await pool.connect();
    const result = await pool.request().query(query);
    const jsResult = JSON.stringify(result.recordset);
    return jsResult;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await pool.close();
  }
}

module.exports = {
  pool,
  ExcuteQuery,
};
