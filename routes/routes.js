const express = require("express");
const router = express.Router();
const controller = require("../controllers/burgers_controller.js");

router.use("/", controller);


module.exports = router;