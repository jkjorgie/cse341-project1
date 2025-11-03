const express = require("express");
const router = express.Router();

router.use("/api-docs", require("./swagger"));

// #swagger.tags = ['General']
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/users", require("./users"));
router.use("/contacts", require("./contacts"));

module.exports = router;
