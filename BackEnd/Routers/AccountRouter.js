var express = require("express");
var router = express.Router();
var AccountController = require("../Controllers/AccountController");

router.get("/", AccountController.FindAll);
router.get("/:username", AccountController.FindOne);

router.post("/updatekeyactivate", AccountController.updateKeyActivate);
router.post("/activateaccount", AccountController.ActivateAccount);
router.post("/register", AccountController.registerUser);

module.exports = router;
