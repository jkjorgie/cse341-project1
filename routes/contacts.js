const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

// #swagger.tags = ['Contacts']
router.get("/", contactsController.getAll);

// #swagger.tags = ['Contacts']
router.get("/:id", contactsController.getSingle);

// #swagger.tags = ['Contacts']
router.post("/", contactsController.createContact);

// #swagger.tags = ['Contacts']
router.put("/:id", contactsController.updateContact);

// #swagger.tags = ['Contacts']
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
