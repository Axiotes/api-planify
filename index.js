const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");

const app = express();

const User = require("./models/User");
const Activities = require("./models/Activities");

const userRoutes = require("./routes/userRoutes");
const activitiesRoutes = require("./routes/activitiesRoutes");

const checkUser = require("./middleware/checkUser");

app.use(compression());

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/user", userRoutes);
app.use("/activities", checkUser, activitiesRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
