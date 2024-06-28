const userController = require("../controllers/user");
const videoController = require("../controllers/video");
const tokenModel = require("../models/token.js");
const commentController = require("../controllers/comment");
const express = require("express");
const video = require("../models/video.js");
var router = express.Router();

router.route("/:id")
  .get(userController.getUserByEmail)
  .put(tokenModel.isLoggedIn ,userController.updateUser)
  .delete(tokenModel.isLoggedIn, userController.deleteUser);

router.route("/:id/videos")
  .get(userController.getUserVideos)
  .post(videoController.createVideo);

router.route('/').post(userController.createUser);

router.route("/:id/videos/:pid")
    .get(videoController.getVideoById)
    .patch(tokenModel.isLoggedIn, videoController.updateVideo)
    .delete(tokenModel.isLoggedIn, videoController.deleteVideo);

  
router.route("/:id/videos/:pid/comments")
    .post(tokenModel.isLoggedIn, commentController.createComment)
    .get(tokenModel.isLoggedIn, commentController.getComments);
  
  router.route("/:id/videos/:pid/comments/:cid")
  .delete(tokenModel.isLoggedIn, commentController.deleteComment)
  .patch(tokenModel.isLoggedIn, commentController.editComment);



module.exports = router;