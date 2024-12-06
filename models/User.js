const { DataType, DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  email: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
});

module.exports = User;
