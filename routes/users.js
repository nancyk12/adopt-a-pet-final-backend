var express = require("express");
var router = express.Router();
const {
	createUser,
	loginUser,
	verifyUser,
} = require("../adopt-a-pet-final-backend/bin/controllers/usersController");

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/verify-user", verifyUser);

module.exports = router;
