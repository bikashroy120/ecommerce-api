const express = require("express");
const { creactBlog, liketheBlog, disliketheBlog, updateBlog, getBlog, getAllBlog, deleteBlog, uploadImages } = require("../conttoller/blogConttoller");
const router = express.Router();
const { blogImgResize, uploadPhoto } = require("../middlewarer/uploadImage");
const {authMiddleware,isAdmin} = require("../middlewarer/authMiddlewarer")



router.post("/",creactBlog)
router.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
  );
router.put("/likes",authMiddleware,liketheBlog)
router.put("/dislikes",authMiddleware,disliketheBlog)
router.put("/:id",updateBlog)
router.get("/:id",getBlog)
router.get("/",getAllBlog)
router.delete("/",deleteBlog)


module.exports=router;