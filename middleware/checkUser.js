const jwt = require("jsonwebtoken");
const getToken = require("../helpers/get-token");
const User = require("../models/User");

const checkUser = async (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    res.status(401).send({
      message: "Usuário não autorizado",
    });
  }

  next();
};

module.exports = checkUser;
