require("dotenv").config();
const fs = require("fs");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: fs.readFileSync('db-certificate.crt')
      },
    },
  }
);

try {
  sequelize.authenticate().then(() => {
    console.log("Conexao com banco de dados realizada com sucesso");
  });
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
