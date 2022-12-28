const express = require("express");
const { creactUser, loginUserctrl, getallUser, getOneUser, deleteUser, updateUser } = require("../conttoller/user-Controller");
const router = express.Router()


router.post("/regester", creactUser)
router.post("/login", loginUserctrl)
router.get("/", getallUser)
router.delete("/:id",deleteUser)
router.put("/:id", updateUser)
router.get("/:id", getOneUser)


module.exports=router;
