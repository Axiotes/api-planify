require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
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
