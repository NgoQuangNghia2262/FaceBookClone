var express = require("express");
var router = express.Router();
var UserProfileController = require("../Controllers/UserProfileController");

router.get("/findone", UserProfileController.getUserProfileById);
router.get("/", UserProfileController.getUserProfile);
module.exports = router;
