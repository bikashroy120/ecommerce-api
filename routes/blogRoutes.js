const express = require("express");
const { creactBlog, liketheBlog, disliketheBlog, updateBlog, getBlog, getAllBlog, deleteBlog } = require("../conttoller/blogConttoller");
const router = express.Router();
const {authMiddleware} = require("../middlewarer/authMiddlewarer")



router.post("/",creactBlog)
router.put("/likes",authMiddleware,liketheBlog)
router.put("/dislikes",authMiddleware,disliketheBlog)
router.put("/:id",updateBlog)
router.get("/:id",getBlog)
router.get("/",getAllBlog)
router.delete("/",deleteBlog)


module.exports=router;