const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    "secret"
  );

  res.status(200).json({
    token: token,
    userId: user._id,
  });
};

module.exports = createUserToken;
