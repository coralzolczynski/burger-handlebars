const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");

router.route("/").get(orm.homePage);
router.route("/select").get(orm.selectAll);
router.route("/insert").get(orm.insertOne);
router.route("/update").get(orm.updateOne);

module.exports = router;