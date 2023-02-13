const express = require("express");
const { creactUser, loginUserctrl, getallUser, getOneUser, deleteUser, updateUser, loginAdmin } = require("../conttoller/user-Controller");
const router = express.Router()


router.post("/regester", creactUser)
router.post("/login", loginUserctrl)
router.post("/login/admin", loginAdmin)
router.get("/", getallUser)
router.delete("/:id",deleteUser)
router.put("/:id", updateUser)
router.get("/:id", getOneUser)


module.exports=router;
