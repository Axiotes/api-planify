const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkUser = require("../middleware/checkUser");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/verify", checkUser, UserController.verifyUser);

module.exports = router;
