const createUserToken = require("../helpers/create-user-token");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class UserController {
  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      res.status(401).send({
        message: "Email ou senha inválido",
      });

      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      res.status(401).send({
        message: "Email ou senha inválido",
      });

      return;
    }

    try {
      const token = await createUserToken(user);

      res.status(200).send({
        message: "",
        token: token,
      });
    } catch (err) {
      res.status(400).send({
        message: "Houve um erro ao realizar o login",
      });
    }
  }

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

      const token = await createUserToken(newUser);

      res.send({
        message: "Cadastro realizado com sucesso!",
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
