const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.post("/user", userController.userRegister);
router.get("/user", userController.seeRegisterUSer);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
