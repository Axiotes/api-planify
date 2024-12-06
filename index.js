const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");

const app = express();

const User = require("./models/User");
const Activities = require("./models/Activities");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
