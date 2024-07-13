const express = require("express");
const router = express.Router();
const multer = require('multer');
const userController = require("../controllers/user");
const videoController = require("../controllers/video");  
const commentController = require("../controllers/comment");
const likeController = require("../controllers/like");
const viewController = require("../controllers/view");
const tokenModel = require("../models/token.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.route("/:id")
  .get(userController.getUserByEmail)
  .put(tokenModel.isLoggedIn, upload.single('photo'), userController.updateUser)
  .delete(tokenModel.isLoggedIn, userController.deleteUser);

router.route("/:id/videos")
  .get(userController.getUserVideos)
  .post(tokenModel.isLoggedIn, upload.fields([{ name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 }]), videoController.createVideo);

router.route('/')
  .post(upload.single('photo'), userController.createUser);

router.route("/:id/videos/:pid")
  .get(videoController.getVideoById)
  .patch(tokenModel.isLoggedIn, upload.fields([{ name: 'img', maxCount: 1 }]), videoController.updateVideo)
  .delete(tokenModel.isLoggedIn, videoController.deleteVideo);

router.route("/:id/videos/:pid/comments")
  .post(tokenModel.isLoggedIn, commentController.createComment)
  .get(tokenModel.isLoggedIn, commentController.getComments);

router.route("/:id/videos/:pid/likes")
  .get(tokenModel.isLoggedIn, likeController.isLiked)
  .patch(tokenModel.isLoggedIn, likeController.setLikes);

router.route("/:id/videos/:pid/views")
  .patch(viewController.updateViews);

router.route("/:id/videos/:pid/comments/:cid")
  .delete(tokenModel.isLoggedIn, commentController.deleteComment)
  .patch(tokenModel.isLoggedIn, commentController.editComment);

module.exports = router;
