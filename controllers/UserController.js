const createUserToken = require("../helpers/create-user-token");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class UserController {
  static async register(req, res) {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.send({
        message: "As senhas não conferem, tente novamente!",
      });

      return;
    }

    const checkUser = await User.findOne({ where: { email: email } });

    if (checkUser) {
      res.send({
        message: "Email já cadastrado",
      });

      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      email: email,
      password: hashedPassword,
    };

    try {
      const newUser = await User.create(user);

      const token = await createUserToken(newUser, req, res);

      res.send({
        message: "Cadastro realizado com sucesso!",
        userId: newUser.id,
        token: token,
      });
    } catch (err) {
      console.log(err);
      res.send({
        message: "Erro ao cadastrar, tente novamente!",
      });
    }
  }
};
