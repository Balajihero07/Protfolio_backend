// const mySqlPromise = require("mysql2/promise");
// require("dotenv").config();
// const pool = mySqlPromise.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 30,
//   queueLimit: 100,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 300000
// });
// console.log("Databse connected")

// exports.getMySqlPromiseConnection = () => {
//   try {
//     return pool;
//   } catch (error) {
//     throw error;
//   }
// };
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }   // required for Neon
});

console.log("PostgreSQL Database Connected");

module.exports = pool;
