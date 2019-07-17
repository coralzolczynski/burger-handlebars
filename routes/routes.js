const express = require("express");
const router = express.Router();
const controller = require("../controllers/burgers_controller.js");

router.use("/select", controller);
router.use("/insert", controller);
router.use("/update", controller);



module.exports = router;