const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.route("/select", burger);
router.route("/insert", burger);
router.route("/update", burger);

module.exports = router;

