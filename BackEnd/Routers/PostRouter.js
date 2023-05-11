var express = require("express");
var router = express.Router();
var PostController = require("../Controllers/PostController");

router.get("/trang", PostController.getTwoPost);
router.get("/countLike/:Id", PostController.getCountLike);
router.get("/countComment/:Id", PostController.getCountComment);
router.get("/countShare/:Id", PostController.getCountShare);
router.get("/waslike", PostController.getUserLike);

router.post("/add/like", PostController.AddLike);
router.post("/delete/like", PostController.DeleteLike);
router.post("/upload_img", PostController.UpLoadImg);

module.exports = router;
