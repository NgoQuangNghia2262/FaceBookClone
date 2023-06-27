var express = require("express");
var router = express.Router();
var UserProfileController = require("../Controllers/UserProfileController");

router.get("/findone", UserProfileController.getUserProfileById);
router.get("/", UserProfileController.getUserProfile);
router.get("/:name", UserProfileController.getAllUserHaveName);

router.post("/register", UserProfileController.registerUser);

module.exports = router;
