const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUserToken = async (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = createUserToken;
