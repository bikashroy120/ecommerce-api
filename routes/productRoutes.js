const express = require("express");
const { createProduct, getaProduct, updateProduct, getAllProduct, addToWishList } = require("../conttoller/productConttoller");
const {authMiddleware,isAdmin} = require("../middlewarer/authMiddlewarer")
const router = express.Router();

router.post("/",authMiddleware,isAdmin,createProduct);
router.put("/wishlist",authMiddleware,addToWishList)
router.get('/:id',getaProduct);
router.get('/',getAllProduct);
router.put('/:id',authMiddleware,isAdmin,updateProduct);



module.exports = router;