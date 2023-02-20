const express = require("express");
const { uploadImages, deleteImages } = require("../conttoller/uploadContoller");
const { isAdmin, authMiddleware } = require("../middlewarer/authMiddlewarer");
const { uploadPhoto, productImgResize } = require("../middlewarer/uploadImage");
const router = express.Router();

router.post(
  "/",
  authMiddleware, 
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages  
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;