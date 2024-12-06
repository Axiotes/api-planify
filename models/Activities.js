const { DataType, DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Activities = db.define("Activities", {
  title: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    require: true,
    allowNull: true,
  },
  priority: {
    type: DataTypes.SMALLINT,
    require: true,
    allowNull: false,
    defaultValue: 1,
  },
  alert: {
    type: DataTypes.BOOLEAN,
    require: true,
    allowNull: false,
    defaultValue: false,
  },
});

Activities.belongsTo(User);
User.hasMany(Activities);

module.exports = Activities;
