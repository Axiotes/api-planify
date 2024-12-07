const jwt = require("jsonwebtoken");
const getToken = require("../helpers/get-token");
const User = require("../models/User");

const checkUser = async (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res.status(401).send({
      message: "Usuário não autorizado",
    });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Falha na autenticação",
      });
    }

    const user = User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).send({
        message: "Usuário não autorizado",
      });
    }

    req.userId = decoded.id;

    next();
  });
};

module.exports = checkUser;
