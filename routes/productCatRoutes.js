const express = require("express");
const { createCategory } = require("../conttoller/productCatCon");
const {isAdmin,authMiddleware} = require("../middlewarer/authMiddlewarer")
const router = express.Router();


router.post("/",authMiddleware,isAdmin,createCategory)



module.exports = router;