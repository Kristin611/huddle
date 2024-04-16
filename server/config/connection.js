require('dotenv').config();

const Sequelize = require('sequelize');


let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );

  
}

// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_NAME)

module.exports = sequelize;