var express = require("express");
var router = express.Router();
var UserProfileController = require("../Controllers/UserProfileController");

router.get("/findone", UserProfileController.getUserProfileById);
router.get("/", UserProfileController.getUserProfile);

router.post("/register", UserProfileController.registerUser);

module.exports = router;
