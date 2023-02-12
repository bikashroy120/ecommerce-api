const express = require("express");
const { createCategory,getallCategory,updateCategory,getCategory,deleteCategory } = require("../conttoller/productCatCon");
const {isAdmin,authMiddleware} = require("../middlewarer/authMiddlewarer")
const router = express.Router();


router.post("/",authMiddleware,isAdmin,createCategory)
router.put("/:id",updateCategory)
router.get("/:id",getCategory)
router.get("/",getallCategory)
router.delete("/",deleteCategory)




module.exports = router;