const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    "secret"
  );

  return token;
};

module.exports = createUserToken;
