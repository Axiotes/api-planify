const getToken = (req) => {
  if (!req.headers.authorization) {
    return;
  }

  const aurhHeader = req.headers.authorization;
  const token = aurhHeader.split(" ")[1];

  return token;
};

module.exports = getToken;
