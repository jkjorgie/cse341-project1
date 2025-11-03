const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

// #swagger.tags = ['Contacts']
router.get("/", contactsController.getAll);

// #swagger.tags = ['Contacts']
router.get("/:id", contactsController.getSingle);

// #swagger.tags = ['Contacts']
/*
  #swagger.parameters['contact'] = {
    in: 'body',
    schema: {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      favoriteColor: 'Green',
      birthday: '1815-12-10'
    }
  }
*/
router.post("/", contactsController.createContact);

// #swagger.tags = ['Contacts']
/*
  #swagger.parameters['contact'] = {
    in: 'body',
    schema: {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      favoriteColor: 'Purple',
      birthday: '1815-12-10'
    }
  }
*/
router.put("/:id", contactsController.updateContact);

// #swagger.tags = ['Contacts']
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
