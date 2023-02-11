const express = require("express");
const { creactBlog, liketheBlog, disliketheBlog, updateBlog, getBlog, getAllBlog, deleteBlog } = require("../conttoller/blogConttoller");
const router = express.Router();


router.post("/",creactBlog)
router.put("/likes",liketheBlog)
router.put("/dislikes",disliketheBlog)
router.put("/:id",updateBlog)
router.get("/:id",getBlog)
router.get("/",getAllBlog)
router.delete("/",deleteBlog)


module.exports=router;