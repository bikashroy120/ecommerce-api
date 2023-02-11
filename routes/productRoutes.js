const express = require("express");
const { createProduct, getaProduct, updateProduct, getAllProduct } = require("../conttoller/productConttoller");

const router = express.Router();

router.post("/",createProduct);
router.get('/:id',getaProduct);
router.get('/',getAllProduct);
router.put('/:id',updateProduct);


module.exports = router;