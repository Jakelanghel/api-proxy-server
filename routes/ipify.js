const express = require("express");
const router = express.Router();

const ipify = require("../controllers/ipify/ipify");

router.get("/", ipify);

module.exports = router;
