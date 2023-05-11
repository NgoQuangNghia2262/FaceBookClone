var express = require("express");
var router = express.Router();
var FriendShipController = require("../Controllers/FriendShipController");

router.get("/", FriendShipController.getUserProfile);

module.exports = router;
