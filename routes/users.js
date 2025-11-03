const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getAll);
// #swagger.tags = ['Users']
router.get("/:id", usersController.getSingle);
// #swagger.tags = ['Users']
router.post("/", usersController.createUser);
// #swagger.tags = ['Users']
router.put("/:id", usersController.updateUser);
// #swagger.tags = ['Users']
router.delete("/:id", usersController.deleteUser);

module.exports = router;
